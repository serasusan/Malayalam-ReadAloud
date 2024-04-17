import logo from './assets/logo.png'
import preview from './assets/preview.png'
// import bg from './assets/bg.png'
import './App.css'
function App() {

  return (
    <>
    <nav className='flex bg-white justify-start'>
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
      <button className='rounded-lg' >Select PDF</button>
      <div className='container flex items-center justify-center	 p-10'>
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


      {/* <div className="w-[1440px] h-[1274.95px] pt-8 bg-white justify-end items-center inline-flex">
  <div className="w-[1446px] h-[1275px] relative flex-col justify-start items-start flex">
    <div className="h-[176.63px] justify-end items-center inline-flex">
      <div className="w-[853px] h-[180px] text-center text-zinc-900 text-[90.20px] font-bold font-['Montserrat'] leading-[88.32px]">Malayalam<br/>Spoken Experience</div>
    </div>
    <div className="w-[1446px] h-[1019.99px] bg-neutral-50" />
    <div className="w-[550px] h-[61.59px] pt-0.5 pb-[2.80px] justify-center items-center inline-flex">
      <div className="w-[550.11px] h-[56.79px] text-center text-neutral-700 text-[22px] font-medium font-['Inter'] leading-[30.80px]">Experience Malayalam , Spoken Just for You!</div>
    </div>
    <div className="w-[267.75px] justify-center items-center inline-flex">
      <div className="grow shrink basis-0 h-[65px] pl-[93px] pr-[92.13px] pt-5 pb-[21px] bg-zinc-900 rounded-xl shadow border border-gray-600 justify-center items-center inline-flex">
        <div className="w-[95.87px] h-6 text-center text-gray-100 text-lg font-medium font-['Inter'] leading-normal">Select PDF </div>
      </div>
    </div>
    <div className="w-[1392px] h-[710.73px] relative">
      <div className="w-[1264px] h-[843px] left-[64px] top-0 absolute">
        <div className="w-[1264px] h-[726.80px] left-[-0px] top-[88.51px] absolute">
          <div className="w-[1264px] h-[1015.94px] left-0 top-[-289.14px] absolute">
          </div>
        </div>
      </div>
      <div className="w-[948px] h-[533.05px] left-[222px] top-[148.04px] absolute bg-white bg-opacity-0 shadow">
        <img className="w-[948px] h-[533.05px] left-0 top-0 absolute" src="https://via.placeholder.com/948x533" />
        <div className="w-[111.62px] h-[111.62px] left-[418.19px] top-[202.83px] absolute opacity-10 bg-blue-600 rounded-[111.62px] border border-white" />
        <div className="w-[63px] h-[63px] left-[442.50px] top-[227.14px] absolute opacity-30 bg-blue-600 rounded-[63px] border border-white" />
        <div className="w-[62.96px] h-[62.96px] p-[19.79px] left-[442.52px] top-[227.16px] absolute bg-zinc-700 rounded-[62.96px] shadow border border-gray-700 justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch pl-[5.85px] pr-[1.67px] py-[2.79px] justify-end items-center inline-flex" />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="w-[1440px] h-[364px] relative bg-white" />
<div className="w-[1155px] h-[311px] relative">
  <div className="pl-[140px] pr-[91px] pt-[9.73px] pb-[46.24px] left-0 top-[132.27px] absolute flex-col justify-start items-center gap-[24.41px] inline-flex">
    <div className="self-stretch h-[61.59px] pr-14 pt-0.5 justify-start items-center inline-flex">
      <div className="w-[424px] h-[84px] text-neutral-700 text-[40px] font-medium font-['Inter'] leading-[30.80px]">We&apos;re a Squad of Five</div>
    </div>
    <div className="w-[924px] h-[50px] text-center text-gray-600 text-xl font-normal font-['Inter'] leading-normal">Our mission is to enrich lives by crafting an inclusive Malayalam read-aloud platform, fostering accessibility for all—empowering learners, the visually impaired, and language enthusiasts alike.</div>
  </div>
  <div className="w-[155px] h-[27px] left-[497px] top-[115px] absolute text-center text-zinc-900 text-[25px] font-normal font-['Montserrat'] leading-[57.20px]">About Us</div>
  <div className="w-[1155px] h-[1073.78px] left-0 top-[404.24px] absolute" />
</div>
<div className="w-[1440px] h-32 pl-6 pr-[1171.14px] pt-[42px] pb-[46px] bg-white justify-start items-center gap-[126.86px] inline-flex">
  <div className="w-[100px] h-10 relative flex-col justify-start items-start flex" />
  <div className="w-[18px] h-[18px] px-[5.25px] justify-center items-center inline-flex" />
</div> */}
    </>
  )
}

export default App

