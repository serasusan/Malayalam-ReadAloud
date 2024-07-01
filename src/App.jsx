import logo from './assets/logo.png'
import preview from './assets/preview.png'
import LanguageSelect from './LanguageSelect';
import  { useState } from 'react';
import ClearResults from './ClearResults';
import { pdfjs } from "react-pdf";
import './App.css';


import { useNavigate } from 'react-router-dom';
function App() {

  const languages = [
    { name: "English", code: "eng" },
    { name: "Hindi", code: "hin" },
    { name: "Malayalam", code: "mal" },   
  ];
  
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const initialLanguage = 'eng'; // Set the initial language code here


  // const count = "ദുബായിലേക്കുള്ള വിമാനങ്ങള്‍ റദ്ദാക്കിയതില്‍ നെടുമ്പാശേരി വിമാനത്താവളത്തിൽ യാത്രക്കാരുടെ പ്രതിഷേധം. മുന്നറിയിപ്പില്ലാതെയാണ്‌ വിമാനങ്ങള്‍ റദ്ദാക്കിയതെന്ന്‌ യാത്രക്കാര്‍ ആരോപിച്ചു. നെടുമ്പാശേരി യിൽ നിന്നും ദുബായിലേക്കുള്ള മൂന്ന്‌ വിമാനങ്ങളും ദോഹയിലേക്കും ഷാര്‍ജയിലേക്കും ഉള്ള ഓരോ വിമാനങ്ങളുമാണ്‌ റദ്ദാക്കിയത്‌.";
  const [audioSrc, setAudioSrc] = useState("");


  const [LanguageSelected, setLanguageSelected] = useState(null);
  const handleLanguageChange = (selectedLanguage) => {
  setLanguageSelected(selectedLanguage);
  };
  //Query for TTS
  const  query = async(text) => {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/mms-tts-mal",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(text),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch audio from the API.");
    }
    console.log(response)
      const result = await response.blob();
       // Generate a URL for the Blob object
       const audioUrl = URL.createObjectURL(result);

       // Set the audio source
       setAudioSrc(audioUrl);
      //return result;
    }


    const hideLoading = () =>
      (document.getElementById("loading").style.display = "none");

    const showError = (error) =>
      document
        .getElementById("error")
        .appendChild(document.createTextNode(`Error: ${error.message}`));

    const clearResults = () => {
      ["container", "loading", "error"].forEach((id) => {
        let element = document.getElementById(id);
        // element.remove();
        element = document.createElement("div");
        element.id = id;
        if (id === "loading") {
          element.appendChild(document.createTextNode("Loading..."));
        }
        document.body.appendChild(element);
      });
    };
    
    const navigate = useNavigate();  

    const handleFileChange = async (event) => {

      const file = event.target.files[0];
      console.log('Fileeeeeeee:', file);
    
      if (file && file.type === 'application/pdf') {
        clearResults();
        try {
          navigate('pdfView', { state: { pdf: file } });
        } catch (error) {
          hideLoading();
          showError(error);
        }
      } else {
        console.error('Please select a PDF file.');
      }
    };
        

  return (

    <>
  
    {/* Navbar */}
    <nav className=' bg-white '>
       <img src={logo} alt='logo' className='logo' />
    </nav>
    <header>
      <div className='heading'>
        <div>
          Malayalam
        </div>
        <div>
          Spoken Experience
        </div>      
      </div>
      <div className='sub-heading text-center p-3'>
        Experience Malayalam , Spoken Just for You!
      </div>
        {/* <button className='rounded-lg' onChange={handleFileChange} >Select PDF</button> */}
      <div>
        {/* <label id="file-input-label" htmlFor="file-input">Select a file</label><br /> */}
        <input className="block w-full text-sm text-slate-500
      file:mr-4 file:py-4 file:px-7 
      file:rounded-lg file:border-0
      file:text-sm font-medium	
      file:bg-black file:text-zinc-100
      hover:file:bg-black" type="file" id="file-input" name="file-input" onChange={handleFileChange}  />
      </div>
      <div className='container flex items-center justify-center   p-10'>
          <img src={preview} className='' alt="ng" />
      </div>
      <div className='about-us w-2/5'>
        <div className='about-us-head'>
          About Us
        </div>
        <div className='about-us-subhead text-center'>
          We&apos;re a Squad of Five
        </div>
        <div className='about-us-content p-3'>
          Our mission is to enrich lives by crafting an inclusive Malayalam read-aloud platform, fostering accessibility for all—empowering learners, the visually impaired, and language enthusiasts alike.
        </div>
      </div>
    </header>

    {/* Input Container */}
    <div id="input-container">
      <h1>PDF Reader</h1>
      <LanguageSelect languages={languages} initialLanguage={initialLanguage} onLanguageChange={handleLanguageChange}/>
      
      <p>Selected Language: {LanguageSelected}</p> {/* Display the selected language */}

      <div>
        <label id="file-input-label" htmlFor="file-input">Select a file</label><br />
        <input type="file" id="file-input" name="file-input" onChange={handleFileChange} multiple />
      </div>
    </div>
    <div className='p-2'>
        <button onClick={query}>Send Request</button>
      
        {audioSrc && (
          <audio controls>
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
      <ClearResults />
    </>
  )
}

export default App