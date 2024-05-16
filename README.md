## MALAYALAM READALOUD
Similar to the ReadAloud feature available in Edge for English, Malayalam ReadAloud is tailored specifically for the Malayalam language. It is designed to support children with learning disabilities, visual impairments, and individuals learning Malayalam as a new language. Research conducted in Turkey involving 62 second-grade students explored the impact of interactive reading aloud on student reading comprehension, motivation, and fluency and this is what motivated to work on this project.

Attached is a video showcasing the functionality of the website:
[[Malayalam ReadAloud - First Update]](https://drive.google.com/file/d/1nqvTu1WQ-MGHviToNGJGjxOwNowVkYzO/view?usp=sharing)

Current Challenges:

API Reliability: We're encountering internal server errors with the API, leading to intermittent request failures. Initially, we attempted to integrate the Bhashini API, but encountered errors. We then transitioned to using an API from a Hugging Face model , which initially functioned smoothly. However, it's now exhibiting internal server errors and inconsistently generating audio output.

Text Extraction Quality: As Malayalam text presents unique characters,, the text extracted has a lot of other characters, and it is not properly extracting the text. 

Emotionless Output: Presently, the tool reads text without conveying emotions, limiting its engagement potential.



Planning to implement the following:
1. Try using Bhashini API again. Felt that it had emotional analysis as well.
2. If not implement emotional analysis.
3. Try seeing what can be done to properly extract Malayalam text. I've used Tesseract.js library and it is actually compatible with almost all languages including Malayalam. But I don't know what is going wrong.

### Update
Implemented the same using the Bhashini API. Now the Text-to-Speech (TTS) functionality works seamlessly. Additionally, it dynamically adjusts pitch and pauses based on the content. 
[[Implemented Bhashini API]](https://drive.google.com/file/d/1v5uhuDV-HltjrFwo96h61kyxx6lPWzBV/view?usp=drive_link)
