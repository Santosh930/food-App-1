let getData=async(url)=>{
  //fetch the data and return the data
   
  let res=await fetch(url);
  let result=await res.json();
  let data =result.meals;

 return data;
}

let append=async(data,container)=>{

  data.forEach((el)=>{
      let div=document.createElement("div");
      let img=document.createElement("img");
      let p=document.createElement("p");
      img.src=el.strMealThumb;
      p.innerText=el.strMeal;
      div.append(img,p);
      container.append(div);

  });
   
  
};



export {getData,append};