import React from 'react';
import { Link } from 'react-router-dom'
import PageHeader from '../PageHeader';
import PageBox from '../PageBox';

const property_img = "/img/ecorse/image1.png";
const map_img = "/img/ecorse/image2.png";
const acquisition_img = "/img/ecorse/image3.png";
const rent_roll_img = "/img/ecorse/image4.png";
const income_expenses_img = "/img/ecorse/image5.png";
const financial_projection_img = "/img/ecorse/image6.png";
const equity_return_img = "/img/ecorse/image7.png";
const projected_cash_flow_img = "/img/ecorse/image8.png";

const Ecorse = () => {

  const imgURL = '/img/ecorse/ec2.jpg';
  const description = "optional info"
  const title = "Ecorse, MI"
  return (
    <div>
      <PageHeader title={title} bgPos='800px -430px' description={description} img={imgURL} />
      <section className="py-3">
        <div style={{ padding: '2%' }}>
          <div className="row mb-4">
            <div style={{ border: '2px solid' }} className="col-md-3">
                <div className="p-3">
                    <h4>Building Type</h4>
                    <p>Walk-up Apartment Building</p>
                    <h4>Address</h4>
                    <p> 4471 & 4581 High Street</p>
                    <h4>City, State</h4>
                    <p>Ecorse, MI</p>
                    <h4>72 Units | $3.175M</h4>
                    <ul style={{ padding: 0, margin: 0, listStylePosition: 'inside' }}>
                      <li>67 Two Bedroom/One Bath</li>
                      <li>5 One Bedroom/One Bath units</li>
                    </ul>
                    <h4>Parking Spaces</h4>
                    <p>104</p>
                    <h4>Stats:</h4>
                    <p>57,100 rentable square feet</p>
                    <p>The buildings sit on 1.67 acres</p>
                    <p>45,430 Rentable Sq. Ft.</p>
                    <p>1971-1973 and provide views of the Detroit River.</p>
              </div>
            </div>
            <div style={{ border: '2px solid' }} className="col-md-8">
              <div className="p-3">

                <div>
                  <div>
                    <div style={{ backgroundColor: 'black' }}>
                      <h4 style={{ padding: '10px' }} className="text-white text-left">THE OPPORTUNITY AND BUSINESS PLAN</h4>
                    </div>
                    <p className="lead">
                     This property is a value add opportunity with potential upside through management as well as increasing current rents to reflect the local multifamily market.  Our plan is to complete interior and exterior renovations, increase the asking rents and rebrand and remarket. We believe that after the completion of the necessary upgrades (roughly $216,000 in improvements) rents can be increased by an average of $92 per unit as well as fundamentally serve as a comfortable living establishment for tenants.  The building will thrive under the expertise of our property management company (Metro Detroit Property Management).
                     </p>
                  </div>

                  <div>
                    <div style={{ backgroundColor: 'black' }}>
                      <h4 style={{ padding: '10px' }} className="text-white text-left">THE NEIGHBORHOOD</h4>
                    </div>
                    <p className="lead">
                    The subject property is located in the southwest suburbs of Detroit.  (DDOT), which is the largest bus transit carrier in Michigan has 44 fixed route bus lines offering services to Detroit and its 23 surrounding communities.  Through a coalition of some of Detroit’s largest employers, worldwide investors, as well as passionate and driven city leaders, Detroit’s revival has become an unprecedented success story bound to make history. The buzz and excitement generated by Detroit’s “Live Downtown”, has attracted thousands of new residents that are seeking housing in the Detroit area, which are sending apartment rents soaring and vacancy rates to historic lows. The city has been reborn with passionate entrepreneurs, determined to not only make their new start-ups succeed, but Detroit succeed as a whole as well. Detroit has the “cool factor” again, with fresh college grads and young people flocking to the city with excitement. And according to Quicken Loans founder Dan Gilbert, who invested $2.2 billion, purchased 95 buildings, and moved 15,000 employees downtown, the sizzle is just beginning.  The significant developments occurring in the area coupled with the property's access to transit make this an ideal investment to capitalize on the area's momentum.
                      </p>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="card p-1">
                <div className="card-body">
                  <div>
                    <div style={{ backgroundColor: 'black' }}>
                      <h4 style={{ padding: '10px' }} className="text-white text-left">ACQUISITION SUMMARY</h4>
                    </div>
                    <p className="lead">
                      Closing costs includes origination fees, appraisal, property inspection, legal fees, recording fees, and transfer taxes. The acquisition fee is payable to Limitless Estates, LLC at closing. Repair escrows are kept in the operating account until needed.
                            </p>
                    <img src={acquisition_img} className="img-fluid" alt="property" style={{ marginTop: "20px" }} />
                  </div>
                  <div>
                    <div style={{ backgroundColor: 'black' }}>
                      <h4 style={{ padding: '10px' }} className="text-white text-left">SELLER-DISCLOSED FINANCIALS</h4>
                    </div>
                    <div>
                      <p>Rent Roll</p>
                      <img src={rent_roll_img} className="img-fluid" alt="property" />
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <p>Income and Expenses - Actual</p>
                      <img src={income_expenses_img} className="img-fluid" alt="property" />
                    </div>
                  </div>
                  <div>
                    <div style={{ backgroundColor: 'black' }}>
                      <h4 style={{ padding: '10px' }} className="text-white text-left">FINANCIAL PROJECTIONS</h4>
                    </div>

                    <p>Here is the 7 Year P&L Projection:</p>
                    <img src={financial_projection_img} className="img-fluid" alt="property" />
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <small className="text-muted">
                      NOTE: The rates of return displayed on this page are only projections, and are not guarantees of any sort. Actual returns may vary widely, due to many economic and marketplace factors beyond our control.
                          </small>
                  </div>
                  <div>
                    <div style={{ backgroundColor: 'black' }}>
                      <h4 style={{ padding: '10px' }} className="text-white text-left">EQUITY RETURN AT RESALE</h4>
                    </div>
                    <p className="lead">
                      We assume we will be able to sell the building at 50 basis points less than the going cap rate of 8% for a well-performing asset in this area of Ecorse, Mi. All investor capital is returned first before the remaining proceeds are split according to the investors’ equity share.
                            </p>
                    <img src={equity_return_img} className="img-fluid" alt="property" />
                    <img src={projected_cash_flow_img} className="img-fluid" alt="property" />
                  </div>
                  <div>
                    <h6 style={{ fontWeight: "100" }}>
                      Questions should be directed to Limitless Estates, LLC, c/o Kyle Mitchell, (562) 833-5010 or kylemitchellrea@gmail.com.
                          </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}

export default Ecorse;