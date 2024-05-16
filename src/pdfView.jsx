import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import { Document , pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';  
import 'react-pdf/dist/Page/AnnotationLayer.css';
import Tesseract from "tesseract.js";
import bhashini from 'bhashini-translation';
bhashini.auth("4fb15b1ad4924f5faa4f558c34e6352c", "106e8b4dbc-84c1-41b9-b9f9-e664491568df", "nSyJDO2w2ePK25OFxs4U371jdFIUyT8IwF9tei8IksSzA3D9bWNqwCbou2z2dyKq");
import logo from './assets/logo.png';

function PdfView() {

  const [audioSrc, setAudioSrc] = useState("");

  const LanguageSelected = "mal";
  const location = useLocation(); // Use useLocation hook to access location object
  const { pdf } = location.state; // Access file from location state


 
  useEffect(() => {
    if (pdf) {
      console.log('PDF file:', pdf);
      // Do something with the pdf if needed
    }
  }, [pdf]);

    //Query for TTS
    // const  query = async(text) => {
    //   const response = await fetch(
    //     "https://api-inference.huggingface.co/models/facebook/mms-tts-mal",
    //     {
    //       headers: { Authorization: "Bearer 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" },
    //       method: "POST",
    //       body: JSON.stringify(text),
    //     }
    //   );
    //   console.log(response)
    //   if (!response.ok) {
    //     throw new Error("Failed to fetch audio from the API.");
    //   }
    //   const result = await response.blob();
      
    //      // Generate a URL for the Blob object
    //   const audioUrl = URL.createObjectURL(result);
  
    //      // Set the audio source
    //   setAudioSrc(audioUrl);
    //     //return result;
    //   }

    // const count = "ദുബായിലേക്കുള്ള വിമാനങ്ങള്‍ റദ്ദാക്കിയതില്‍ നെടുമ്പാശേരി വിമാനത്താവളത്തിൽ യാത്രക്കാരുടെ പ്രതിഷേധം. മുന്നറിയിപ്പില്ലാതെയാണ്‌ വിമാനങ്ങള്‍ റദ്ദാക്കിയതെന്ന്‌ യാത്രക്കാര്‍ ആരോപിച്ചു. നെടുമ്പാശേരി യിൽ നിന്നും ദുബായിലേക്കുള്ള മൂന്ന്‌ വിമാനങ്ങളും ദോഹയിലേക്കും ഷാര്‍ജയിലേക്കും ഉള്ള ഓരോ വിമാനങ്ങളുമാണ്‌ റദ്ദാക്കിയത്‌.";

      
    //trying out bhashini
    const query = async (text) => {
      const response = await bhashini.tts('ml',text,'female');
      console.log(response);
      if (!response) {
        throw new Error("Failed to fetch audio from the API.");
      }
      try{
        const result = await fetch(response);
        if (!result.ok) {
          throw new Error("Failed to fetch audio from the API.");
        }
        const audioBlob = await result.blob(); 
    
        console.log(result);
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioSrc(audioUrl);
      }
      catch(err){
        console.log(err);
      }
    
    }
    const readFile = (file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener("loadend", (event) =>
          resolve(new Uint8Array(event.target.result))
        );
        reader.readAsArrayBuffer(file);
      });
    };

    

    const convertToImage = async (pdf) => {
      const container = document.getElementById("container");
      const images = [];
      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement("canvas");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        container.appendChild(canvas);
        await page.render({
          canvasContext: canvas.getContext("2d"),
          viewport: viewport,
        }).promise;
        images.push(canvas.toDataURL("image/png"));
      }
      return images;
    };

    const convertToText = async (images) => {
      const worker = await Tesseract.createWorker();
      // await worker.loadLanguage(LanguageSelected);
      if(LanguageSelected){
        await worker.reinitialize(LanguageSelected);
      }
      else{
        console.warn("Selected language not available, skipping initialization.");
      }

      const container = document.getElementById("container");
      let extractedText = '';
      for (const image of images) {
        const {
          data: { text },
        } = await worker.recognize(image);
        extractedText += text + ' '; // Append the extracted text to the existing text
        const section = document.createElement("section");
        const pre = document.createElement("pre");
        pre.appendChild(document.createTextNode(text));
        section.appendChild(pre);
        container.appendChild(section);
      }
      query(extractedText);

      // TTS(count);
      await worker.terminate();
    };

 

    const showLoading = () =>
      (document.getElementById("loading").style.display = "block");

    const hideLoading = () =>
      (document.getElementById("loading").style.display = "none");



   const loadFile = async (file) =>
      pdfjs.getDocument({ data: file }).promise;

    const convertFile = async (file) => {
        showLoading();
        const pdf = await loadFile(file);
        const images = await convertToImage(pdf);
        await convertToText(images);
        hideLoading();
      };


  async function onDocumentLoadSuccess() {
    await convertFile(await readFile(pdf));

  }

  
  return (
    <div >
    <nav className=' bg-white '>
       <img src={logo} alt='logo' className='logo' />

      </nav>
      <div className='flex items-center justify-center p-2'>      
        {audioSrc && (
          <audio controls>
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
      {pdf && (
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}/>
         
      )}
     
    </div>
  );
}

PdfView.propTypes = {
  location: PropTypes.object // Make location prop optional
};

export default PdfView;


