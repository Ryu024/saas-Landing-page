import {motion} from "framer-motion"

export default function Slider ({images , from , to}) {
    const imgArr = [...images]
    return (
        <div className="container">
            <div className="flex my-gradient ">
                <motion.div className="flex flex-shrink-0"
                initial={{ x :  `${from}`}}
                animate={{x :  `${to}`}}
                transition={{duration : 20 , repeat : Infinity, ease : "linear"}}
                >
                    {imgArr.map((image , index) => (
                        <img src={image.logo} key={index}
                            className="h-40"
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-shrink-0"
                initial={{ x :  `${from}`}}
                animate={{x : `${to}`}}
                transition={{duration : 20, repeat : Infinity, ease : "linear"}}
                >
                    {imgArr.map((image , index) => (
                        <img src={image.logo} key={index}
                            className="h-40"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
