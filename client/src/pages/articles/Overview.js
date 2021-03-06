import React, { Component } from 'react';
/** api array of objects*/

import { View, Mask, Jumbotron } from 'mdbreact';
const styles = {
  header: {
    padding: '0',
    background: 'url(https://i.imgur.com/f4FJAIJ.jpg?1) center no-repeat',
    backgroundSize: 'cover',
    height: 25 + 'em'
  }
};
export default class Overview extends Component {
  render() {
    const imgUrl = 'https://i.imgur.com/f4FJAIJ.jpg?1';
    return (
      <section id="overview">
        <div style={styles.header} />

        <div className="container">
          <div className="row justify-content-center py-3">
            <div className="col-8 text-left text-align-left">
              <div>
                <h3 className="h3-responsive mb-2">
                  Why Invest In Multifamily?
                </h3>
                <div className="border-bottom" />
                <div className="mt-4">
                  <p>
                    Have you heard stats such as “80% of millionaires attribute
                    their wealth to real estate”? Or heard stories of living the
                    good life off passive cash flow from rental property?
                    Combine this with the recent years of unpredictable,
                    disappointing stock markets, and you get masses of people
                    realizing they have no control over many of their
                    investments and therefore their life savings. Tired of
                    blindly following the crowd of 401K stuffers, many have
                    started looking at why so many wealthy people own real
                    estate.
                  </p>

                  <p>
                    When it comes to real estate investments, we focus
                    in multifamily apartment complexes because of the control it
                    provides in determining the investments results. Some of the
                    most powerful factors in real estate are control, debt
                    (leverage), and taxes. For the average investor, leverage is
                    commonly used in real estate, but not in stocks or private
                    lending. In addition, the IRS and owners of investment
                    rental property might as well be best friends because the
                    IRS has made so many rules to benefit us!
                  </p>

                  <p>
                    In multifamily (5+ units) or other commercial investment
                    real estate, the value of the property is based on the
                    income the property produces. This is exactly why the
                    wealthy focus on commercial property such as multifamily
                    apartment complexes. Being that you control the income and
                    expenses in a property, you also control the value. What
                    this means is if you have a way to increase income either by
                    raising rents, billing residents back for utilities, or
                    adding any other source of ancillary income to the
                    operations of the property, you will also add value. Also,
                    if you decrease expenses by renegotiating operating expense
                    costs, billing residents back for utilities, reducing
                    turnovers and vacancy, putting in energy efficient light
                    bulbs and plumbing fixtures, or ANY other way to cut
                    operating expenses, you increase the value of your property.
                  </p>

                  <p>
                    An article for more tips on ways to increase rents (some may
                    not apply to all of our investments) that our team will
                    implement to drive the value of our properties{' '}
                    <strong>can be found</strong>
                    <a
                      target="_blank"
                      href="https://www.biggerpockets.com/renewsblog/13-ways-increase-rent-add-rental-property/"
                    >
                      {' '}
                      here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
