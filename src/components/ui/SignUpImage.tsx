import Image from 'next/image'
export const SignUpImage = () => {
  return (
    <>
      <section>
        <Image
          src={'/images/signup-rocket.jpeg'}
          alt="Sign up Rocket"
          layout="fixed"
          width={864}
          height={800}
        />
        {/* <img src="/images/rocket.jpeg" alt="Sign up Rocket" /> */}
      </section>
    </>
  )
}
