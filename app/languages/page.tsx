import LanguageTest from '@/components/services/language/first'
import LanguageTestPreparationPage from '@/components/services/language/second'
import Third from '@/components/services/study-abroad/third'


function page() {
  return (
    <div>
      <LanguageTest/>
      <LanguageTestPreparationPage/>
     <Third/>
    </div>
  )
}

export default page
