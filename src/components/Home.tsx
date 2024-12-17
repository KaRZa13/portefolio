const Home = () => {
  const name = 'Rafael MURO'

  return (
    <>
      <div className='w-screen h-screen'>
        <div className='flex justify-center items-center bg-green h-44 w-4/6 absolute bottom-10'>
          <div><h1 className='text-9xl font-black uppercase'>{ name }</h1></div>
        </div>
      </div>
    </>
  )
}


export default Home