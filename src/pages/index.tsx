import Point from '@/components/Point'
import data from '@/json/data.json'
import { Result } from '@/types/Result'

interface Props {
  results: Result[]
}

export default function Home({ results }: Props) {
  return (
    <main className="bg-[#ffffff] flex justify-center items-center h-screen sm:items-start">
      <div className="content w-[740px] h-[510px] flex shadow-lg rounded-3xl sm:flex-col sm:h-[840px]">
        <div className="left-side bg-gradient-to-b from-[#6743ff] to-[#312be5] rounded-l-3xl h-full flex-1 sm:rounded-l-none sm:rounded-b-3xl sm:h-[353px]">
          <div className="mt-[45px] sm:mt-[25px] flex justify-center items-center flex-col mx-[20px]">
            <div className="title text-lg font-bold text-[#cac5ff] mb-10 sm:mb-5">
              Your Result
            </div>
            <div className="result-number bg-gradient-to-b from-[#4922cc] to-[#4936f2] w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center mb-[10px] sm:w-[133px] sm:h-[133px]">
              <div className="pontuation text-[50px] text-[#fefcff] font-bold">
                76
              </div>
              <div className="total text-[#8677ff] text-sm font-bold ">
                of 100
              </div>
            </div>
            <div className="classification text-[27px] font-bold text-[#fbfdff] mb-[10px] sm:mb-[5px] sm:text-[20px]">
              Great
            </div>
            <div className="comparation text-center text-[16px] text-[#b3b6ff] font-bold w-[241px] sm:text-[12px] sm:mb-4">
              Your scored higher than 65% of the people who have taken these
              tests.
            </div>
          </div>
        </div>
        <div className="right-side w-1/2 sm:w-full h-full rounded-r-3xl flex justify-center sm:justify-start sm:rounded-none ">
          <div className="mx-[20px] mt-[45px] w-[290px] sm:ml-[35px] sm:mb-5">
            <div className="title text-lg font-bold text-[#2e354e] mb-10 sm:mb-5">
              Summary
            </div>
            <div className="points-area grid gap-4">
              {results.map((result, index) => (
                <Point
                  key={index}
                  color={result.background}
                  icon={result.icon}
                  name={result.category}
                  score={result.score}
                  textColor={result.textColor}
                />
              ))}
            </div>
            <button className="mt-[35px] sm:mt-[15px] bg-[#303b59] w-[290px] h-[54px] rounded-3xl text-white font-bold">
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export const getStaticProps = () => {
  const results: Result[] = data

  return {
    props: {
      results,
    },
  }
}
