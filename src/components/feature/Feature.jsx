import React from 'react'

import { ArrowUpward, ArrowDownward } from '@material-ui/icons';

import "./feature.css";

function Feature() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,345</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5,345</span>
                    <span className="featuredMoneyRate">
                        +7.64 <ArrowUpward className="featuredIcon positive"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,345</span>
                    <span className="featuredMoneyRate">
                        -13.24 <ArrowDownward  className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}


export default Feature
