import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { HashLink } from 'react-router-hash-link';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function Product(props) {
 // console.log(props);
  const product = props.location.query;
  // console.log(props.location.query.thumbimg);

  return (
    <div className="product_page height100">
      <div className="left width70">
        <h2>{product.title}</h2>
        <h5>{product.describe}</h5>
        <h4>{product.question}</h4>
        <p>כוס טפטופים היא מעיין משאבת חלב המתחברת אליך בוואקום קל ואוספת בשבילך את טיפות החלב היקרות שיוצאות בזמן שהבייבי מחובר ויונק מהצד השני או בזמן שאיבה. כך שאת גם חוסכת זמן מיותר וגם אוספת בקלות חלב אם לתינוקך. כוס הטפטופים של Haakaa עשויה מיחידה אחת של 100% סיליקון בעלת תווי תקן בינלאומיים לבטיחות ולסטריליזציה מלאה. מציעה חווית שאיבה קלה, נוחה וידידותית לסביבה. מהרגע שתכירי אותה תוכלי לשכוח ממכונות שאיבה גדולות, מסורבלות ומרעישות שעולות מאות שקלים ובכל פעם שאת משתמשת בהם עליך לפרק אותן לחתיכות ולחבר מההתחלה. בזכות גודלה הקומפקטי של הכוס ניתן להכניס אותה לכל תיק יד או תיק החתלה. היא עובדת ללא בטריות או חוטי חשמל מחוברים כך שאת משוחררת מלדאוג לחשמל או בטריות כוס הטפטופים מושלמת לנסיעות וטיולים ולכל מקום בו תרצי לשאוב בשקט וביעילות. רק הצמידי את הכוס אל השד ותני לה לעשות את העבודה. .</p>
        <HashLink to="/#distributors"><button type="button">לרכישה אונליין</button></HashLink>

        <HashLink to="/#distributors">
          <button type="button">לאיסוף מיידי ממפיצה</button>
        </HashLink>

      </div>
      <div className="flex">
       
        <Carousel dir="ltr" className="carousel">
      <div dir="ltr">
        <img src={product.primarying} alt={product.title}/>
    
      </div>
      <div>
        <img src={product.thumbimg[0]} alt={product.title}/>
      
      </div>
      <div>
        <img src={product.thumbimg[2]} alt={product.title}/>
        
      </div>
    </Carousel>
        {/* <Carouselcomp /> */}
      </div>
      <div>
        <div className="right width70">
          <Tabs direction={"rtl"}>
            <TabList>
              <Tab>הוראות שימוש</Tab>
              <Tab>הוראות טיפול במוצר</Tab>
              <Tab>טיפ מאיתנו</Tab>
            </TabList>
            <TabPanel>
              <h4>הוראות שימוש </h4>
              <p>{product.use} </p>
            </TabPanel>
            <TabPanel>
              <h4>הוראות טיפול במוצר</h4>
              <p>{product.ins_clean} </p>
            </TabPanel>
            <TabPanel>
              <h4>טיפ מאיתנו </h4>
              <p>{product.tip} </p>
            </TabPanel>
          </Tabs>
        </div>
      
        <div className="left width30">
          <video key={product.id} autoPlay muted>
            <source src={product.video} type="video/mp4" />
          </video>
        </div>
      
      </div>
    </div>
  );
}

export default Product;
