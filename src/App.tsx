import reactLogo from '@assets/react.svg';
import viteLogo from '@assets/vite.svg';
import tsLogo from '@assets/ts.svg';
import eslintLogo from '@assets/eslint.svg';
import prettierLogo from '@assets/prettier.svg';
import axiosLogo from '@assets/axios.svg';
import tenacityDev from '@assets/tenacity-dev.png';

function App() {
  return (
    <main className='darkbg-zinc-900 darktext-gray-100 flex h-screen justify-center bg-blue-200 text-gray-900'>
      <section className='my-4 max-w-screen-md flex-col space-y-4 p-4'>
        <div className='mb-4 flex h-16 justify-between'>
          <img className='h-full w-full' src={reactLogo} alt='react logo' />
          <img className='h-full w-full' src={viteLogo} alt='vite logo' />
          <img className='h-full w-full' src={tsLogo} alt='typescript logo' />
          <img className='h-full w-full' src={eslintLogo} alt='eslint logo logo' />
          <img className='h-full w-full' src={prettierLogo} alt='prettier logo' />
          <img className='h-full w-full' src={axiosLogo} alt='axios logo' />
        </div>
        <h1 className='text-3xl font-bold'>
          Vite + React + Typescript + Relative Paths + Tanstack Query + Tailwind & Utils + Eslint + Prettier
        </h1>

        <section>
          <h3 className='text-xl font-bold'>This is a starter template.</h3>
          <h4 className='font-bold'>Іncludes:</h4>

          <ul className='list-inside list-disc text-sm'>
            <li>Tanstack Query ✅</li>
            <li>Axios for networking ✅</li>
            <li>Eslint with airbnb config ✅</li>
            <li>Code conventions with and tailwind class sorting with prettier ✅</li>
            <li>Relative paths ready ✅</li>
            <li>classNames and tailwind-merge libraries installed with the `cn` function added ✅</li>
          </ul>
        </section>
      </section>
    </main>
  );
}

export default App;
