import logo from "./logo.svg";
import "./App.css";
import react, { useState } from "react";
import Header from "./Component/Header.js";
import Component from "./Component/Component";
import Component2 from "./Component/Conponent2";
import Component3 from "./Component/Component3";
import Stil2 from "./Component/Stil2";
import resim1 from "./jforce.jpg";
import resim2 from "./resim2.jpg";
import resim3 from "./resim3.jpg";

function App() {
  //console=log(window.location.href);
  const [control, setControl] = useState(null);
  return (
    <div style={{ border:"2px solid black",
    width:"calc(100%-40px)",
    display:"flex",
    flexDirection:"column",
    margin:"20px"
    }}>
      <div style={{ width: "100%", float: "left" }}>
        <button onClick={() => setControl("anasayfa")}>anasayfa</button>
        <button onClick={() => setControl("hakkımızda")}>hakkımızda</button>
        <button onClick={() => setControl("iletisim")}>iletisim</button>
      </div>
      {control === "anasayfa" ? (
        <>
          <Header>JForce Eğitim</Header>

          <Component resimcomponent={resim1} yazi="yazilar">
            {" "}
          </Component>
          <Component resimcomponent={resim2} yazi="yazilar">
            {" "}
          </Component>


          <Stil2 uzunyazi="uzunyazilar yazıldı"> 

          </Stil2>
          <div
            style={{
              width: "calc(100% - 40px)",
              float: "left",
              margin: "20px",
            }}
          >
            <Component2
              tasarim="comp2"
              yazicomponent2="yazicomponent2"
            ></Component2>
            <Component2
              tasarim="comp2"
              yazicomponent2="yazicomponent2"
            ></Component2>
          </div>
          <div style={{ margin: "20px", width: "100%" }}>
            <Component3 resim3={resim3} />
            <Component3 resim3={resim3} />
            <Component3 resim3={resim3} />
          </div>
        </>
      ) : control === "hakkımızda" ? (
        <>
          <Header>JForce Eğitim</Header>
          <div
            style={{
              width: "calc(100%)",
              float: "left",
              margin: "20px",
            }}
          >
            <Component2
              tasarim="comp2yeni"
              yazicomponent2="Bilişim teknolojilerindeki yenilikleri özümseyerek 
              sunduğumuz katma değerli çözümler ile müşterilerimizin değişen ve artan
               rekabet koşullarına adapte olmasını sağlayan güvenilir bir teknoloji şirketi 
               olmak en büyük amacımız.  Müşterilerimizin ihtiyaçlarını en iyi şekilde anlayarak,
                sistemlerimiz ve yazılım çözümleri portföyümüzle en yüksek değeri sunuyor ve 
                onların başarısını önceleyerek uzun vadeli ortaklıklarla başarıya imza atıyoruz.  "
            ></Component2>
          </div>
        </>
      ) : control === "iletisim" ? (
        <>
          <div
            style={{
              margin: "20px",
            }}
          >
            <div>
              <b style={{ marginRight: "29px", paddingTop: "20px" }}> Adı:</b>
              <input type="text" />
            </div>

            <div>
              <b style={{ marginRight: "33px", paddingTop: "10px" }}>Tel:</b>
              <input type="text" />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div width="50%" style={{ paddingTop: "5px" }}>
                <b style={{ marginRight: "10px" }}>Mesaj:</b>
              </div>
              <div width="50px">
                <textarea></textarea>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
