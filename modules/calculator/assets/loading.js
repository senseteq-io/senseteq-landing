const Loading = ({ fill, ...rest }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill || '#6B7579'}
    className="spin"
    {...rest}>
    <path d="M12,2 C14.6882705,2 17.2112345,3.06769864 19.0737405,4.93160588 C19.6593066,5.51761256 19.6589495,6.46735996 19.0729428,7.05292608 C18.4869361,7.63849219 17.5371887,7.63813505 16.9516226,7.05212838 C15.646211,5.74573464 13.8840456,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,12.8284271 4.32842712,13.5 3.5,13.5 C2.67157288,13.5 2,12.8284271 2,12 C2,6.4771525 6.4771525,2 12,2 Z" />
  </svg>
)

export default Loading