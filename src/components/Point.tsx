import Image from 'next/image'

interface PointProps {
  icon: string
  name: string
  score: number
  color: string
  textColor: string
}

const Point = (props: PointProps) => {
  return (
    <div
      className={'point flex  rounded-md h-[55px] items-center justify-between'}
      style={{ backgroundColor: `${props.color}` }}
    >
      <div className="flex ml-[20px] items-center justify-center">
        <Image
          priority
          src={props.icon}
          alt=""
          className="mr-[16px]"
          width={20}
          height={20}
        />
        <div
          className={`name  font-semibold`}
          style={{ color: `${props.textColor}` }}
        >
          {props.name}
        </div>
      </div>
      <div className="numbers flex justify-end w-full mr-5">
        <span className="text-[#302e44] font-semibold mr-[7px]">
          {props.score}
        </span>{' '}
        <span className="text-[#9793a1] font-semibold">/ 100</span>
      </div>
    </div>
  )
}

export default Point
