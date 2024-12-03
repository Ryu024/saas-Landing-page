/* eslint-disable react/prop-types */

function Tag({children}) {
  return (
    <div className="flex mx-auto rounded-full font-semibold border border-indigo-400 hover:bg-indigo-400/20 mb-3 cursor-pointer bg-gradient-to-t from-indigo-200 hover:ring-1">{children}</div>
  )
}

export default Tag
