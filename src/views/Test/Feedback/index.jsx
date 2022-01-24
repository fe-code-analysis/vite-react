import classNames from "classnames"
import { memo, useEffect, useRef } from "react"
import './index.less'
import star from './star.png'
import img from './0.png'

const Feedback = ({status, setStatus, result}) => {
  const timerRef = useRef(null)
  useEffect(() => {
    if (!timerRef.current && result) {
      timerRef.current = setTimeout(() => {
        setStatus(0)
      }, 3 * 1000);
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current)
          timerRef.current = null
        }
      }
    }
  }, [timerRef])

  return (
    <>
      {
        status
        ? (
          <div className='course-feedback'>
            <div className={classNames({
              'course-feedback-bd': true,
              selected: result
            })}>
              <img src={result.img} alt="" className="course-feedback-bd-img" />
              <p className="course-feedback-bd-text">{result.text[0]}</p>
                {
                  result.text[1]
                  ? (
                    <p className="course-feedback-bd-tip">{result.text[1]}</p>
                  )
                  : (
                    <div className="course-feedback-bd-star">
                    <img src={result.star} alt="" />
                      <p>
                        +{result.starNum}
                      </p>
                      </div>
                  )
                }
            </div>
          </div>
        )
        : null
      }
    </>
  )
}

export default memo(Feedback)
