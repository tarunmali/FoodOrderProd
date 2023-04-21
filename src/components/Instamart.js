import {useState} from 'react';




const Section =({title,description})=>{
        
        const [isVisible,setIsVisible]=useState(false);
        const toggle= ()=>{setIsVisible(!isVisible)}

        return (<div className="border border-black p-2 m-2">
                <h3 className="font-bold text-xl">{title}</h3>

                {isVisible?<button className="underline" onClick={toggle}> Hide </button>: <button className="underline" onClick={toggle}> Show </button>}
                
                {isVisible && <p>{description}</p>}
        </div>)
}


const Instamart = () => {
        return(<div>
                <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
                <Section title={"About Instamart"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quas porro voluptatibus atque minima modi neque accusantium velit, iure dignissimos beatae tempore sit odit quisquam similique maxime nisi vero sed ad nostrum. Sunt incidunt quo saepe? Sed, fugit quos. Dicta culpa porro expedita cupiditate deleniti soluta deserunt iste beatae, obcaecati minima incidunt nemo ipsa est earum nihil suscipit quam iusto quos distinctio reprehenderit dolorem accusamus quasi fugiat? Cum voluptatem ducimus, labore perferendis accusantium quo dolore, delectus natus fuga quae similique incidunt ad. Aliquam animi non voluptatum, hic commodi provident fugit quam quasi nam consequatur inventore ducimus eius in, libero saepe."}/>
                <Section title={"Team Instamart"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quas porro voluptatibus atque minima modi neque accusantium velit, iure dignissimos beatae tempore sit odit quisquam similique maxime nisi vero sed ad nostrum. Sunt incidunt quo saepe? Sed, fugit quos. Dicta culpa porro expedita cupiditate deleniti soluta deserunt iste beatae, obcaecati minima incidunt nemo ipsa est earum nihil suscipit quam iusto quos distinctio reprehenderit dolorem accusamus quasi fugiat? Cum voluptatem ducimus, labore perferendis accusantium quo dolore, delectus natus fuga quae similique incidunt ad. Aliquam animi non voluptatum, hic commodi provident fugit quam quasi nam consequatur inventore ducimus eius in, libero saepe."}/>
                <Section title={"Careers"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quas porro voluptatibus atque minima modi neque accusantium velit, iure dignissimos beatae tempore sit odit quisquam similique maxime nisi vero sed ad nostrum. Sunt incidunt quo saepe? Sed, fugit quos. Dicta culpa porro expedita cupiditate deleniti soluta deserunt iste beatae, obcaecati minima incidunt nemo ipsa est earum nihil suscipit quam iusto quos distinctio reprehenderit dolorem accusamus quasi fugiat? Cum voluptatem ducimus, labore perferendis accusantium quo dolore, delectus natus fuga quae similique incidunt ad. Aliquam animi non voluptatum, hic commodi provident fugit quam quasi nam consequatur inventore ducimus eius in, libero saepe."}/>
        </div>)
}


export default Instamart;

