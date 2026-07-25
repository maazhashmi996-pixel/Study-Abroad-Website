import ContactBlog from "../components/blogs/contactBlog"
import BlogsPage from "../components/blogs/first"
import RelatedBlogs from "../components/blogs/relatedBlogs"

export default function Page() {
  return (
    <div>
      <BlogsPage/>
      <RelatedBlogs/>
      <ContactBlog/>
    </div>
  )
}


