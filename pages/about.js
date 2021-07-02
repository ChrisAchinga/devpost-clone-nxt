import Layout from '@/layouts/Layout'

export default function AboutPage() {
  return (
    <Layout title='About AirSpace'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>About</h1>

      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>AirSpace Blog</h3>

        <p className='mb-3'>This is a blog built with Next.js and Markdown</p>

        <p>
          <span className='font-bold'>Unreleased: Version 0.0.1</span>
        </p>
      </div>
    </Layout>
  )
}