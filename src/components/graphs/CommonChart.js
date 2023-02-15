import * as echarts from "echarts"
import React, { useEffect, useRef, useState } from "react"

const CommonChart = ({ options, resize }) => {
    const canvasRef = useRef(null)
    const [chartElement, setChartElement] = useState(canvasRef)
    useEffect(() => {
        if (chartElement.current) {
            setChartElement(echarts.init(canvasRef.current))
        } else {
            chartElement.setOption(options)
        }

        const resizeCharts = () => {
            chartElement?.resize()
        }
        window.addEventListener("resize", resizeCharts)
        return () => {
            window.removeEventListener("resize", resizeCharts)
        }
    }, [options, chartElement])

    return <div style={{ height: "100%", width: "100%" }} ref={canvasRef}></div>
}

export default CommonChart
