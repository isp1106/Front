import React from 'react'

const ErrorCom = ({
  Title = 'Oops!',
  Contents = '요청하신 페이지에 접속할 수 없습니다.',
}) => {
  // const orderTitle = `주문이 정상적으로\n처리되지 않았습니다`
  // const orderContents = `결제방법을 다시한번 확인 해 주세요\n오류가 반복될 경우 1:1문의를 남겨주세요`
  return (
    <div className="flex flex-col justify-center items-center pt-[75px] h-[75vh] gap-8 text-lg">
      <svg
        width="182"
        height="53"
        viewBox="0 0 182 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="91.5" cy="26.5" r="26.5" fill="#D86145" />
        <path
          d="M164.726 51.1036L181.607 30.78C180.011 40.1924 173.443 47.916 164.726 51.1036ZM181.974 25.8185L162.139 49.6996V0.778909C173.362 3.59018 181.74 13.716 181.974 25.8185ZM149.279 0.837818L134.755 41.9138C131.563 37.548 129.675 32.1611 129.675 26.3389C129.678 14.0924 138.018 3.77345 149.279 0.837818ZM136.9 44.4895L152.558 0.206182C153.631 0.0720003 154.72 0 155.828 0C156.991 0 158.135 0.0785456 159.26 0.225818V52.4422C158.135 52.5927 156.991 52.668 155.828 52.668C148.389 52.6713 141.668 49.5295 136.9 44.4895Z"
          fill="#D86145"
        />
        <path
          d="M51.7823 21.0803H36.244V2.04282C44.1155 5.37118 50.0435 12.4697 51.7823 21.0803ZM26.1528 0.00390625C28.652 0.00390625 31.0733 0.360634 33.3645 1.02172V21.0803H0.5265C2.951 9.06936 13.52 0.00390625 26.1528 0.00390625ZM0 26.3395C0 25.5443 0.03575 24.7588 0.10725 23.9799H31.33L9.14225 46.3228C3.549 41.489 0 34.325 0 26.3395ZM11.4465 48.1032L33.3645 26.0319V49.2323L30.1503 45.9988L28.1158 48.0475L32.045 52.0043C30.1503 52.4461 28.1775 52.6785 26.1528 52.6785C20.7025 52.6719 15.639 50.9865 11.4465 48.1032ZM36.244 50.633V23.9799H52.2015C52.2698 24.7588 52.3088 25.5443 52.3088 26.3395C52.3055 37.2606 45.669 46.6501 36.244 50.633Z"
          fill="#D86145"
        />
        <path
          d="M82 39.5C82.6667 37 85.5 32 91.5 32C97.5 32 100.333 37 101 39.5"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="76.2929"
          y1="24.5146"
          x2="85.5144"
          y2="15.293"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="77.7071"
          y1="15.2929"
          x2="86.9286"
          y2="24.5144"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="95.2929"
          y1="24.7782"
          x2="104.514"
          y2="15.5567"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="96.7071"
          y1="15.5566"
          x2="105.929"
          y2="24.7781"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
      <div className="text-primary font-bold text-center whitespace-pre-wrap">
        {Title}
      </div>
      <div className="text-xs text-black-200 mb-0">
        <span className="block text-center whitespace-pre-wrap">
          {Contents}
        </span>
      </div>
    </div>
  )
}
export default ErrorCom
