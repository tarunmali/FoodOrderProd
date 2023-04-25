import {useState} from 'react';




const Section =({title,description,isVisible,setIsVisible})=>{
        return (<div className="border border-black p-2 m-2">
                <h3 className="font-bold text-xl">{title}</h3>

                {isVisible?<button className="underline" onClick={setIsVisible}> Hide </button>: <button className="underline" onClick={setIsVisible}> Show </button>}
                
                {isVisible && <p>{description}</p>}
        </div>)
}


const Instamart = () => {

        const [visibleSection,setVisibleSection]=useState("about");


        return(<div>
                <h1 className="text-3xl p-2 m-2 font-bold"></h1>
                <Section 
                setIsVisible={()=>setVisibleSection("about")}
                title={"React.JS"} 
                description={"This is a blazingly fast 🔥and highly scalable 🚀 website single page app made by React. THe code is production ready and uses Parcel📦 for bundling. The very page you are seeing is lazy loaded and hence have a separate bundle sent."}
                isVisible={visibleSection==="about"}
                />


                <Section 
                setIsVisible={()=>setVisibleSection("team")}
                title={"Tailwind CSS"} 
                description={"The styling of the website is done using tailwind css. It is a utility first css framework. It is highly customizable and has a lot of features. It is very easy to use and is very fast. Tailwind CSS uses postcss along with Parcel to prune the unused CSS and make the website bundle smaller."}
                isVisible={visibleSection==="team"}
                />


                <Section 
                setIsVisible={()=>setVisibleSection("careers")}
                title={"Redux.JS"} 
                description={"The website uses Redux.JS toolkit for state management. Redux kind of provide a very big object called store which contains the state of the application. The store is immutable and hence we cannot directly change the state. We can only dispatch actions to the store which will then update the state. The store is then subscribed to the components and the components are re-rendered when the state changes. In our case we have a cart slice which contains the state of the cart. The cart slice is then subscribed to the cart component and the cart component is re-rendered when the state of the cart changes."}
                isVisible={visibleSection==="careers"}
                />

        </div>)
}


export default Instamart;

