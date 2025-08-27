import Form from 'next/form';
import ResetBtn from './ResetBtn';
import { Search } from 'lucide-react';

const SearchForm = ({query}: {query?: string}) => {

  return (
    <Form action='/' className='search-form' scroll={false}>
        <input
            type='text'
            name='query'
            defaultValue={query}
            placeholder='Search Startups'
            className='search-input' 
        />
        <div className='flex gap-2'>
          {
            query && <ResetBtn />
          }
          <button type="submit" className='search-btn cursor-pointer text-white'>
            <Search className='size-5'/>
          </button>
        </div>
    </Form>
  )
}

export default SearchForm