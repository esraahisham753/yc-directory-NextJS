import Form from 'next/form';

const SearchForm = () => {
  const query = 'query';

  const handleReset = () => {
    
  }

  return (
    <Form action='/' className='search-form'>
        <input
            type='text'
            defaultValue={query}
            placeholder='Search'
            className='search-input' 
        />
        <div className='flex gap-2'>

        </div>
    </Form>
  )
}

export default SearchForm