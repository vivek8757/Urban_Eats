let menu = () => {
  let content = document.querySelector(".content");
  content.style.height = "100%";
  content.style.backgroundColor = "grey";
  let h1 = document.createElement("h1");
  content.appendChild(h1);
  h1.innerHTML = "Food menu";
  let h2b = document.createElement("h2");
  content.appendChild(h2b);
  h2b.innerHTML = "Beverages";
  h2b.style.textAlign = "center";
  let outerdiv1 = document.createElement("div");
  outerdiv1.style.display = "flex";
  outerdiv1.style.flexDirection = "column";
  // outerdiv1.style.justifyContent = "center";
  outerdiv1.style.alignItems = "center";
  outerdiv1.style.border = "2px solid white";
  outerdiv1.style.width = "80%";
  outerdiv1.style.textAlign = "center";
  outerdiv1.style.margin = "auto";
  outerdiv1.style.borderRadius = "20px";
  let div1 = document.createElement("div");
  div1.style.height = "100px";
  div1.style.width = "400px";
  div1.style.border = "2px solid red";
  div1.style.backgroundColor = "orange";
  let div1head = document.createElement("h3");
  div1head.innerHTML = "Tea";
  div1.appendChild(div1head);
  let div1text = document.createElement("div");
  div1text.innerHTML =
    "The first sip is joy, the second is gladness, the third is serenity, the fourth is madness, the fifth is ecstasy ";
  div1.appendChild(div1text);
  content.appendChild(div1);

  let div2 = document.createElement("div");
  div2.style.height = "100px";
  div2.style.width = "400px";
  div2.style.border = "2px solid red";
  div2.style.backgroundColor = "orange";
  let div2head = document.createElement("h3");
  div2head.innerHTML = "Coffee";
  div2.appendChild(div2head);
  let div2text = document.createElement("div");
  div2text.innerHTML =
    "Coffee is the common man's gold, and like gold, it brings to every person the feeling of luxury and nobility";
  div2.appendChild(div2text);
  content.appendChild(div2);

  let div3 = document.createElement("div");
  div3.style.height = "100px";
  div3.style.width = "400px";
  div3.style.border = "2px solid red";
  div3.style.backgroundColor = "orange";
  let div3head = document.createElement("h3");
  div3head.innerHTML = "Brownies";
  div3.appendChild(div3head);
  let div3text = document.createElement("div");
  div3text.innerHTML =
    "Brownies are like a good friend – they always lift your spirits.";
  div3.appendChild(div3text);
  content.appendChild(div3);

  let div4 = document.createElement("div");
  div4.style.height = "100px";
  div4.style.width = "400px";
  div4.style.border = "2px solid red";
  div4.style.backgroundColor = "orange";
  let div4head = document.createElement("h3");
  div4head.innerHTML = "juice";
  div4.appendChild(div4head);
  let div4text = document.createElement("div");
  div4text.innerHTML =
    "The secret ingredient to a perfect day? A glass of refreshing juice.";
  div4.appendChild(div4text);
  content.appendChild(div4);
  outerdiv1.appendChild(div1);
  outerdiv1.appendChild(div2);
  outerdiv1.appendChild(div3);
  outerdiv1.appendChild(div4);
  content.appendChild(outerdiv1);

  let h2c = document.createElement("h2");
  content.appendChild(h2c);
  h2c.innerHTML = "Snacks";
  h2c.style.textAlign = "center";

  let outerdiv2 = document.createElement("div");
  outerdiv2.style.display = "flex";
  outerdiv2.style.flexDirection = "column";
  // outerdiv1.style.justifyContent = "center";
  outerdiv2.style.alignItems = "center";
  outerdiv2.style.border = "2px solid white";
  outerdiv2.style.width = "80%";
  outerdiv2.style.textAlign = "center";
  outerdiv2.style.margin = "auto";
  outerdiv2.style.borderRadius = "20px";
  let div1s = document.createElement("div");
  div1s.style.height = "100px";
  div1s.style.width = "400px";
  div1s.style.border = "2px solid red";
  div1s.style.backgroundColor = "brown";
  let div1shead = document.createElement("h3");
  div1shead.innerHTML = "Burger";
  div1s.appendChild(div1shead);
  let div1stext = document.createElement("div");
  div1stext.innerHTML = "burgers make the world go ‘round";
  div1s.appendChild(div1stext);
  content.appendChild(div1s);

  let div2s = document.createElement("div");
  div2s.style.height = "100px";
  div2s.style.width = "400px";
  div2s.style.border = "2px solid red";
  div2s.style.backgroundColor = "brown";
  let div2shead = document.createElement("h3");
  div2shead.innerHTML = "Chowmein";
  div2s.appendChild(div2shead);
  let div2stext = document.createElement("div");
  div2stext.innerHTML = "Treat yourself to a bowlful of chow mein paradise.";
  div2s.appendChild(div2stext);
  content.appendChild(div2s);

  let div3s = document.createElement("div");
  div3s.style.height = "100px";
  div3s.style.width = "400px";
  div3s.style.border = "2px solid red";
  div3s.style.backgroundColor = "brown";
  let div3shead = document.createElement("h3");
  div3shead.innerHTML = "Momos";
  div3s.appendChild(div3shead);
  let div3stext = document.createElement("div");
  div3stext.innerHTML =
    "I don't always share momos, but when I do, it's only with my closest friends";
  div3s.appendChild(div3stext);
  content.appendChild(div3s);

  let div4s = document.createElement("div");
  div4s.style.height = "100px";
  div4s.style.width = "400px";
  div4s.style.border = "2px solid red";
  div4s.style.backgroundColor = "brown";
  let div4shead = document.createElement("h3");
  div4shead.innerHTML = "Maggi";
  div4s.appendChild(div4shead);
  let div4stext = document.createElement("div");
  div4stext.innerHTML =
    "Maggi: The only thing that can make me forget about my problems for three minutes.";
  div4s.appendChild(div4stext);
  content.appendChild(div4s);
  outerdiv2.appendChild(div1s);
  outerdiv2.appendChild(div2s);
  outerdiv2.appendChild(div3s);
  outerdiv2.appendChild(div4s);
  content.appendChild(outerdiv2);

  let h2m = document.createElement("h2");
  content.appendChild(h2m);
  h2m.innerHTML = "Dinner";
  h2m.style.textAlign = "center";

  let outerdiv3 = document.createElement("div");
  outerdiv3.style.display = "flex";
  outerdiv3.style.flexDirection = "column";
  // outerdiv1.style.justifyContent = "center";
  outerdiv3.style.alignItems = "center";
  outerdiv3.style.border = "2px solid white";
  outerdiv3.style.width = "80%";
  outerdiv3.style.textAlign = "center";
  outerdiv3.style.margin = "auto";
  outerdiv3.style.borderRadius = "20px";
  let div1m = document.createElement("div");
  div1m.style.height = "100px";
  div1m.style.width = "400px";
  div1m.style.border = "2px solid red";
  div1m.style.backgroundColor = "bisque";
  let div1mhead = document.createElement("h3");
  div1mhead.innerHTML = "shahi paneer";
  div1m.appendChild(div1mhead);
  let div1mtext = document.createElement("div");
  div1mtext.innerHTML =
    "Discover the joy of paneer - it's a cheese lover's dream come true. ";
  div1m.appendChild(div1mtext);
  content.appendChild(div1m);

  let div2m = document.createElement("div");
  div2m.style.height = "100px";
  div2m.style.width = "400px";
  div2m.style.border = "2px solid red";
  div2m.style.backgroundColor = "bisque";
  let div2mhead = document.createElement("h3");
  div2mhead.innerHTML = " Chilli Mushroom";
  div2m.appendChild(div2mhead);
  let div2mtext = document.createElement("div");
  div2mtext.innerHTML =
    "Nature alone is antique, and the oldest art a mushroom.";
  div2m.appendChild(div2mtext);
  content.appendChild(div2m);

  let div3m = document.createElement("div");
  div3m.style.height = "100px";
  div3m.style.width = "400px";
  div3m.style.border = "2px solid red";
  div3m.style.backgroundColor = "bisque";
  let div3mhead = document.createElement("h3");
  div3mhead.innerHTML = "Chicken Curry";
  div3m.appendChild(div3mhead);
  let div3mtext = document.createElement("div");
  div3mtext.innerHTML =
    "Bringing the heat with this spicy and aromatic chicken curry.";
  div3m.appendChild(div3mtext);
  content.appendChild(div3m);

  let div4m = document.createElement("div");
  div4m.style.height = "100px";
  div4m.style.width = "400px";
  div4m.style.border = "2px solid red";
  div4m.style.backgroundColor = "bisque";
  let div4mhead = document.createElement("h3");
  div4mhead.innerHTML = "Special Thali";
  div4m.appendChild(div4mhead);
  let div4mtext = document.createElement("div");
  div4mtext.innerHTML = "Every bite tells a story in this delightful thali.";
  div4m.appendChild(div4mtext);
  content.appendChild(div4m);
  outerdiv3.appendChild(div1m);
  outerdiv3.appendChild(div2m);
  outerdiv3.appendChild(div3m);
  outerdiv3.appendChild(div4m);
  content.appendChild(outerdiv3);
};
export { menu };
