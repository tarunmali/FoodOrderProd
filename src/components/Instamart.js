import {useState} from 'react';




const Section =({title,description,isVisible,setIsVisible})=>{
        

        return (<div className="border border-black p-2 m-2">
                <h3 className="font-bold text-xl">{title}</h3>

                {isVisible?<button className="underline" onClick={setIsVisible}> Hide </button>: <button className="underline" onClick={setIsVisible}> Show </button>}
                
                {isVisible && <p>{description}</p>}
        </div>)
}


const Instamart = () => {
        const [sectionConfig,setsectionConfig]=useState({
                showAbout:false,
                showTeam: false,
                showCareers:false
        });

        return(<div>
                <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
                <Section setIsVisible={()=>setsectionConfig({showAbout:true,showTeam:false,showCareers:false})} isVisible={sectionConfig.showAbout} title={"About Instamart"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quas porro voluptatibus atque minima modi neque accusantium velit, iure dignissimos beatae tempore sit odit quisquam similique maxime nisi vero sed ad nostrum. Sunt incidunt quo saepe? Sed, fugit quos. Dicta culpa porro expedita cupiditate deleniti soluta deserunt iste beatae, obcaecati minima incidunt nemo ipsa est earum nihil suscipit quam iusto quos distinctio reprehenderit dolorem accusamus quasi fugiat? Cum voluptatem ducimus, labore perferendis accusantium quo dolore, delectus natus fuga quae similique incidunt ad. Aliquam animi non voluptatum, hic commodi provident fugit quam quasi nam consequatur inventore ducimus eius in, libero saepe."}/>
                <Section setIsVisible={()=>setsectionConfig({showAbout:false,showTeam:true,showCareers:false})} isVisible={sectionConfig.showTeam} title={"Team Instamart"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quas porro voluptatibus atque minima modi neque accusantium velit, iure dignissimos beatae tempore sit odit quisquam similique maxime nisi vero sed ad nostrum. Sunt incidunt quo saepe? Sed, fugit quos. Dicta culpa porro expedita cupiditate deleniti soluta deserunt iste beatae, obcaecati minima incidunt nemo ipsa est earum nihil suscipit quam iusto quos distinctio reprehenderit dolorem accusamus quasi fugiat? Cum voluptatem ducimus, labore perferendis accusantium quo dolore, delectus natus fuga quae similique incidunt ad. Aliquam animi non voluptatum, hic commodi provident fugit quam quasi nam consequatur inventore ducimus eius in, libero saepe."}/>
                <Section setIsVisible={()=>setsectionConfig({showAbout:false,showTeam:false,showCareers:true})} isVisible={sectionConfig.showCareers} title={"Careers"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quas porro voluptatibus atque minima modi neque accusantium velit, iure dignissimos beatae tempore sit odit quisquam similique maxime nisi vero sed ad nostrum. Sunt incidunt quo saepe? Sed, fugit quos. Dicta culpa porro expedita cupiditate deleniti soluta deserunt iste beatae, obcaecati minima incidunt nemo ipsa est earum nihil suscipit quam iusto quos distinctio reprehenderit dolorem accusamus quasi fugiat? Cum voluptatem ducimus, labore perferendis accusantium quo dolore, delectus natus fuga quae similique incidunt ad. Aliquam animi non voluptatum, hic commodi provident fugit quam quasi nam consequatur inventore ducimus eius in, libero saepe."}/>
        </div>)
}


export default Instamart;

