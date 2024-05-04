// import  { useState, useEffect } from 'react';

// const languages = [
//     { name: "English", code: "eng" },
//     { name: "Portuguese", code: "por" },
//     { name: "Afrikaans", code: "afr" },
//     { name: "Albanian", code: "sqi" },
//     { name: "Amharic", code: "amh" },
//     { name: "Arabic", code: "ara" },
//     { name: "Assamese", code: "asm" },
//     { name: "Azerbaijani", code: "aze" },
//     { name: "Azerbaijani - Cyrillic", code: "aze_cyrl" },
//     { name: "Basque", code: "eus" },
//     { name: "Belarusian", code: "bel" },
//     { name: "Bengali", code: "ben" },
//     { name: "Bosnian", code: "bos" },
//     { name: "Bulgarian", code: "bul" },
//     { name: "Burmese", code: "mya" },
//     { name: "Catalan; Valencian", code: "cat" },
//     { name: "Cebuano", code: "ceb" },
//     { name: "Central Khmer", code: "khm" },
//     { name: "Cherokee", code: "chr" },
//     { name: "Chinese - Simplified", code: "chi_sim" },
//     { name: "Chinese - Traditional", code: "chi_tra" },
//     { name: "Croatian", code: "hrv" },
//     { name: "Czech", code: "ces" },
//     { name: "Danish", code: "dan" },
//     { name: "Dutch; Flemish", code: "nld" },
//     { name: "Dzongkha", code: "dzo" },
//     { name: "English, Middle (1100-1500)", code: "enm" },
//     { name: "Esperanto", code: "epo" },
//     { name: "Estonian", code: "est" },
//     { name: "Finnish", code: "fin" },
//     { name: "French", code: "fra" },
//     { name: "French, Middle (ca. 1400-1600)", code: "frm" },
//     { name: "Galician", code: "glg" },
//     { name: "Georgian", code: "kat" },
//     { name: "German", code: "deu" },
//     { name: "German Fraktur", code: "frk" },
//     { name: "Greek, Modern (1453-)", code: "ell" },
//     { name: "Greek, Ancient (-1453)", code: "grc" },
//     { name: "Gujarati", code: "guj" },
//     { name: "Haitian; Haitian Creole", code: "hat" },
//     { name: "Hebrew", code: "heb" },
//     { name: "Hindi", code: "hin" },
//     { name: "Hungarian", code: "hun" },
//     { name: "Icelandic", code: "isl" },
//     { name: "Indonesian", code: "ind" },
//     { name: "Inuktitut", code: "iku" },
//     { name: "Irish", code: "gle" },
//     { name: "Italian", code: "ita" },
//     { name: "Japanese", code: "jpn" },
//     { name: "Javanese", code: "jav" },
//     { name: "Kannada", code: "kan" },
//     { name: "Kazakh", code: "kaz" },
//     { name: "Kirghiz; Kyrgyz", code: "kir" },
//     { name: "Korean", code: "kor" },
//     { name: "Kurdish", code: "kur" },
//     { name: "Lao", code: "lao" },
//     { name: "Latin", code: "lat" },
//     { name: "Latvian", code: "lav" },
//     { name: "Lithuanian", code: "lit" },
//     { name: "Macedonian", code: "mkd" },
//     { name: "Malay", code: "msa" },
//     { name: "Malayalam", code: "mal" },
//     { name: "Maltese", code: "mlt" },
//     { name: "Marathi", code: "mar" },
//     { name: "Nepali", code: "nep" },
//     { name: "Norwegian", code: "nor" },
//     { name: "Oriya", code: "ori" },
//     { name: "Panjabi; Punjabi", code: "pan" },
//     { name: "Persian", code: "fas" },
//     { name: "Polish", code: "pol" },
//     { name: "Pushto; Pashto", code: "pus" },
//     { name: "Romanian; Moldavian; Moldovan", code: "ron" },
//     { name: "Russian", code: "rus" },
//     { name: "Sanskrit", code: "san" },
//     { name: "Serbian", code: "srp" },
//     { name: "Serbian - Latin", code: "srp_latn" },
//     { name: "Sinhala; Sinhalese", code: "sin" },
//     { name: "Slovak", code: "slk" },
//     { name: "Slovenian", code: "slv" },
//     { name: "Spanish; Castilian", code: "spa" },
//     { name: "Swahili", code: "swa" },
//     { name: "Swedish", code: "swe" },
//     { name: "Syriac", code: "syr" },
//     { name: "Tagalog", code: "tgl" },
//     { name: "Tajik", code: "tgk" },
//     { name: "Tamil", code: "tam" },
//     { name: "Telugu", code: "tel" },
//     { name: "Thai", code: "tha" },
//     { name: "Tibetan", code: "bod" },
//     { name: "Tigrinya", code: "tir" },
//     { name: "Turkish", code: "tur" },
//     { name: "Uighur; Uyghur", code: "uig" },
//     { name: "Ukrainian", code: "ukr" },
//     { name: "Urdu", code: "urd" },
//     { name: "Uzbek", code: "uzb" },
//     { name: "Uzbek - Cyrillic", code: "uzb_cyrl" },
//     { name: "Vietnamese", code: "vie" },
//     { name: "Welsh", code: "cym" },
//     { name: "Yiddish", code: "yid" },
//   ];

//   const LanguageSelect = () => {

//     const [language, setLanguage] = useState('eng');
  
//     useEffect(() => {
//       const storedLanguage = localStorage.getItem('language') || 'eng';
//       setLanguage(storedLanguage);
//     }, []);
  
  
//     const handleLanguageChange = (event) => {
//       const newLanguage = event.target.value;
//       setLanguage(newLanguage);
//       localStorage.setItem('language', newLanguage);
//     };

//     return(
//         <>
//         <p>Select the language and a file:</p>
//         <div>
//           <select value={language} onChange={handleLanguageChange}>
//             {languages.map((lang) => (
//               <option key={lang.code} value={lang.code}>
//                 {lang.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         </>
//     );
    
// };

// export default LanguageSelect;


// LanguageSelect.js
import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const LanguageSelect = (props) => {
  const {languages,initialLanguage } = props;
  const [language,setLanguage] = useState(initialLanguage);

// Store selected language in localStorage whenever it changes
useEffect(() => {
  localStorage.setItem('language', language);
}, [language]);

// Retrieve stored language from localStorage when the component mounts
useEffect(() => {
  const storedLanguage = localStorage.getItem('language');
  if (storedLanguage) {
    setLanguage(storedLanguage);
  }
}, []);

//proptypes validation
LanguageSelect.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  })).isRequired,
  initialLanguage: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired, // Add this line
};
//handle change
const handleLanguageChange = (event) => {
  const selectedLanguage = event.target.value;
  setLanguage(selectedLanguage);
  localStorage.setItem('language',selectedLanguage);
  props.onLanguageChange(selectedLanguage); //pass the selected Language
}
  return (
    <div>
      <p>Select the language:</p>
      <select value={language} onChange={handleLanguageChange}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;