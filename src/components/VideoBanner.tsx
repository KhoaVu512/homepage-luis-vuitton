import Text from './Text'
import Button from './Button'

type VideoBannerProps = {}

const VideoBanner = ({}: VideoBannerProps) => {
  return (
    <section className="relative h-[760px]">
      <div className="h-full">
        <video
          src="videos/video1.mp4"
          loop
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute z-[1] bottom-0 left-0 w-full">
        <div className="relative text-white flex flex-col justify-center items-center gap-6 text-center p-12">
          <Text
            as="h1"
            className="text-[32px] "
          >
            Hello
          </Text>
          <div>
            <Button
              label="Button"
              url="#"
            />
          </div>
        </div>
      </div>

      <div className='bg-red-500'>
        hello
      </div>
    </section>
  )
}

export default VideoBanner
