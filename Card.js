import React from "react";
import Data from "./Data";


export default function Card(){
    const dataResult= Data.map((item,index)=>{
       if (item["free"]){
        item =item["free"];
       }
      else if(item["plus"]){
        item =item["plus"]
      }
      else  {item = item["pro"]}
   
return (   
    <div className="col-lg-4" key={index}>
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{item.plan_name}</h5>
            <h6 className="card-price text-center">${item.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span> {item.user[2] ? <strong>{item.user[1]}</strong> : item.user[1]}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{item.storage[1]}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{item.public_projects[1]}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{item.access[1]}</li>
              <li  className={`${!item.private_projects[0] ? "text-muted" : ""}`}><span className="fa-li">
                <i className={`fa ${item.private_projects[0] ? "fa-check" : "fa-times"}`}></i>
                </span>{item.private_projects[1]}
                </li>
              <li className={`${!item.phone_support[0] ? "text-muted" : ""}`}><span className="fa-li">
              <i className={`fa ${item.phone_support[0] ? "fa-check" : "fa-times"}`}></i>
              </span>{item.phone_support[1]}
                </li>
              <li className={`${!item.subdomain[0] ? "text-muted" : ""}`}><span className="fa-li">
              <i className={`fa ${item.subdomain[0] ? "fa-check" : "fa-times"}`}></i>
              </span>{item.user[2] ? <p><b>UnLimited</b> Free Subdomain</p> : item.subdomain[1]}
              </li>
              <li className={`${!item.reports[0] ? "text-muted" : ""}`}><span className="fa-li">
              <i className={`fa ${item.reports[0] ? "fa-check" : "fa-times"}`}></i>
              </span>{item.reports[1]}
                </li>
            </ul>
            <div className="d-grid">
              <a href="/" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>   
)
});
return <>{dataResult}</>;
    
}