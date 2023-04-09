import {
  Title,
  FormInput,
  Income,
  Expense
} from './components'

function App() {
  return (
      <>
          <Title/>
          
          <div className='w-[90vh] h-full bg-base-100 shadow-xl mx-auto'>
            <FormInput/>
              <h1 className='text-center w-full mx-auto pb-5 text-3xl font-bold my-5 border-b-4 border-indigo-500'>Transaction List</h1>
            <div className='flex'>
              <Income/>
              <Expense/>
            </div>
          </div>
      </>
  );
}

export default App;
