import React from 'react';
import logo from './logo.svg';
import './App.css';
import pika from "./Resources/pikachu.png"; 
import truth from "./Resources/thetruth.jpg"; 
import Flexbox from 'flexbox-react';
import creditpolicyandfullypaid from "./Resources/creditpolicyandfullypaid.png";
import creditpolicyandnotfullypaid from "./Resources/creditpolicyandnotfullypaid.png";
import purposeandfullypaid from "./Resources/purposeandfullypaid.png";
import purposeandnotfullypaid from "./Resources/purposeandnotfullypaid.png";
import intrateandfullypaid from "./Resources/intrateandfullypaid.png";
import intrateandnotfullypaid from "./Resources/intrateandnotfullypaid.png";
import installandfullypaid from "./Resources/installandfullypaid.png";
import installandnotfullypaid from "./Resources/installandnotfullypaid.png";
import annualincandfullypaid from "./Resources/annualincandfullypaid.png";
import annualincandnotfullypaid from "./Resources/annualincandnotfullypaid.png";
import dtiandfullypaid from "./Resources/dtiandfullypaid.png";
import dtiandnotfullypaid from "./Resources/dtiandnotfullypaid.png";
import ficoandfullypaid from "./Resources/ficoandfullypaid.png";
import ficoandnotfullypaid from "./Resources/ficoandnotfullypaid.png";
import balandfullypaid from "./Resources/balandfullypaid.png";
import balandnotfullypaid from "./Resources/balandnotfullypaid.png";
import utilandfullypaid from "./Resources/utilandfullypaid.png";
import utilandnotfullypaid from "./Resources/utilandnotfullypaid.png";
import inqandfullypaid from "./Resources/inqandfullypaid.png";
import inqandnotfullypaid from "./Resources/inqandnotfullypaid.png";
import delinqandfullypaid from "./Resources/delinqandfullypaid.png";
import delinqandnotfullypaid from "./Resources/delinqandnotfullypaid.png";
import pubrecandfullypaid from "./Resources/pubrecandfullypaid.png";
import pubrecandnotfullypaid from "./Resources/pubrecandnotfullypaid.png";
import intrateandinstallfp from "./Resources/intrateandinstallfp.png";
import intrateandinstallnfp from "./Resources/intrateandinstallnfp.png";
import intrateandficofp from "./Resources/intrateandficofp.png";
import intrateandficonfp from "./Resources/intrateandficonfp.png";
import installandannualincfp from "./Resources/installandannualincfp.png";
import installandannualincnfp from "./Resources/installandannualincnfp.png";
import annualincanddaysfp from "./Resources/annualincanddaysfp.png";
import annualincanddaysnfp from "./Resources/annualincanddaysnfp.png";
import annualincandbalfp from "./Resources/annualincandbalfp.png";
import annualincandbalnfp from "./Resources/annualincandbalnfp.png";
import ficoanddaysfp from "./Resources/ficoanddaysfp.png";
import ficoanddaysnfp from "./Resources/ficoanddaysnfp.png";
import ficoandutilfp from "./Resources/ficoandutilfp.png";
import ficoandutilnfp from "./Resources/ficoandutilnfp.png";
import ficoandinqfp from "./Resources/ficoandinqfp.png";
import ficoandinqnfp from "./Resources/ficoandinqnfp.png";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="header">
          <h1>Lumnus Consulting Data Analytics</h1>
          <p>Ethan Tan - Helen Chang - Rohan Sreedhar</p>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LendingClub.com underwrites different types of loans for their clients. 
          We created visual representations of this data and performed statistical
          analysis, generating insights on the differences between paid and unpaid 
          loans.
        </p>


        <div class="desc">
          <p>Correlating Underwriting Criteria of LendingClub and Unpaid Loans</p>
        </div>

        <div class="body">
          <p>
            As we would expect, the proportion of those who meet the
            credit underwriting criteria of LendingClub.com is higher
            in those who have already fully paid off their loans than
            those who have not. Specifically, only roughly 17% of those
            who have already finished paying off their debts do not meet
            those criteria, while over 33% of people who have yet to pay
            off their debts do not meet those requirements. The two pie
            charts below help demonstrate this difference. This contrast
            is intuitive as the purpose of this criteria is to identify
            people who are more likely to pay their debts off. However,
            this does demonstrate that LendingClub is misidentifying about
            a sixth of those who pay their debts off incorrectly, which
            could indicate a possible recommendation for LendingClub to
            revamp these criteria to be more accurate.
          </p>
        </div>

        <div class="boxGallery">
          <div class="gallery">
            <img src={creditpolicyandfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={creditpolicyandnotfullypaid}>
            </img>
          </div>
        </div>

        <div class="desc">
          <p>Distribution of Purpose and Unpaid Loans</p>
        </div>

        <div class="body">
          <p>
            The distribution of purpose between paid and unpaid loans
            appears to be fairly similar. The glaring differences would
            be that there is a higher proportion of smaller businesses
            in the demographic of those who have yet to fully pay off
            their loans. There is also a marginally higher percentage
            of educational loans out of the unpaid loans. In the fully
            paid loans category, there is a higher proportion of major
            purchases and credit card loans. This could suggest that
            people are more prepared to pay off loans from credit cards 
            and major purchases. Furthermore, these pie charts indicate 
            that educational debt and debts incurred from starting a small 
            business are likely more difficult to pay off.
          </p>
        </div>   

        <div class="boxGallery">
          <div class="gallery">
            <img src={purposeandfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={purposeandnotfullypaid}>
            </img>
          </div>
        </div>     

        <div class="desc">
          <p>Comparing Distributions Between Paid and Unpaid Loans</p>
        </div>

        <div class="body">
          <p>
            The distribution of nearly all the given variables in the
            data set appear to be fairly similar. The notable differences
            that can be spottted are that fully paid loans have almost a
            bimodal distribution with a lower peak at around 8%, which brings
            down the average interest rate of paid off loans. This seems to suggest
            that lower interest rates would increase the probability of a loan being
            fully paid back. The FICO scores of unpaid loans are a bit more spread out 
            on the lower end and have a higher proportion of scores that are below 700. 
            This pattern demonstrates that higher FICO scores are correlated more often
            with fully paid back loans. Additionally, the utilization rate of unpaid 
            loans is a bit more evenly spread out than the fully paid loans, which is
            far more centralized on the lower end. This could show that people who spend
            their loans at a higher rate are less likely to pay back their loans in
            entirety.
          </p>
        </div>

        <div class="body">
          <p>
            The remaining characteristics of monthly installments, annual income,
            debt to income ratio, revolving balances, number of inquiries within
            the past six months, number of delinquencies in the past two years, and
            number of derogatory public records do not appear to have any bearing on
            whether or not a loan has been paid back.
          </p>
        </div>


        <div class="boxGallery">
          <div class="gallery">
            <img src={intrateandfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={intrateandnotfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={installandfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={installandnotfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={annualincandfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={annualincandnotfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={dtiandfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={dtiandnotfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={ficoandfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={ficoandnotfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={balandfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={balandnotfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={utilandfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={utilandnotfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={inqandfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={inqandnotfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={delinqandfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={delinqandnotfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={pubrecandfullypaid}>
            </img>
          </div>
          <div class="gallery">
            <img src={pubrecandnotfullypaid}>
            </img>
          </div>
        </div> 

        <div class="desc">
          <p>Trends Across Paid and Unpaid Loans</p>
        </div>

        <div class="body">
          <p>
            Monthly Installment Payments start lower for fully paid loans, but 
            increase at a faster rate than unpaid loans. For fully paid loans, 
            more money in high-interest rate payments goes toward the principal 
            amount, possibly directly contributing to the fully paid status.
          </p>
        </div>

        <div class="boxGallery">
          <div class="gallery">
            <img src={intrateandinstallfp}>
            </img>
          </div>
          <div class="gallery">
            <img src={intrateandinstallnfp}>
            </img>
          </div>
          <div class="body">
          <p>
            For low interest rate loans, loans not fully paid back tend
            to have lower FICO scores. However, as evidenced by the smaller
            slope of the regression line for the not fully paid loan graph,
            high interest rates have similar FICO scores between fully paid
            and unpaid loans.

          </p>
        </div>
          <div class="gallery">
            <img src={intrateandficofp}>
            </img>
          </div>
          <div class="gallery">
            <img src={intrateandficonfp}>
            </img>
          </div>
          <div class="body">
          <p>
            While the annual income associated with loans still unpaid is
            slightly lower, there is very little difference between the data
            for fully paid and not fully paid loans. There is little evidence
            that loan payment status is a confounding variable between annual
            income and monthly installment payments.
          </p>
        </div>
          <div class="gallery">
            <img src={installandannualincfp}>
            </img>
          </div>
          <div class="gallery">
            <img src={installandannualincnfp}>
            </img>
          </div>
          <div class="body">
          <p>
            Unlike the previous analysis, loan payment status seems to be a
            major difference maker when comparing Annual Income and Days 
            Within Credit Line. Accounts with fully paid loans have longer 
            access to credit lines, at all levels of annual income. In fact, 
            the regression line also has a higher slope for paid loans, meaning 
            access to credit is even more unequal as income level increases.
          </p>
        </div>
          <div class="gallery">
            <img src={annualincanddaysfp}>
            </img>
          </div>
          <div class="gallery">
            <img src={annualincanddaysnfp}>
            </img>
          </div>
          <div class="body">
          <p>
           Fully paid loans skew upward, toward more revolving balance. At lower 
           annual income levels, fully paid loans have a higher revolving balance, 
           but this gap is closed as annual income increases. At the higher levels 
           of income, there is little difference in revolving balance between paid 
           and unpaid loans.
          </p>
        </div>
          <div class="gallery">
            <img src={annualincandbalfp}>
            </img>
          </div>
          <div class="gallery">
            <img src={annualincandbalnfp}>
            </img>
          </div>
          <div class="body">
          <p>
           Higher FICO scores correlate with more Days Within Credit Line. 
           This makes intuitive sense as well; a better credit score should 
           mean longer and easier access to credit. This correlation holds 
           strongly for both paid and unpaid loans, and it seems that loan 
           payment status is not an influential variable in this situation.
          </p>
        </div>
          <div class="gallery">
            <img src={ficoanddaysfp}>
            </img>
          </div>
          <div class="gallery">
            <img src={ficoanddaysnfp}>
            </img>
          </div>
          <div class="body">
          <p>
           At lower FICO scores, fully paid loans have a higher Credit Utilization Rate. 
           Curiously, the rate of change in unpaid loans is greater, meaning the opposite holds 
           true at higher FICO scores: unpaid loans have a higher Credit Utilization Rate.
          </p>
        </div>
          <div class="gallery">
            <img src={ficoandutilfp}>
            </img>
          </div>
          <div class="gallery">
            <img src={ficoandutilnfp}>
            </img>
          </div>
          <div class="body">
          <p>
           These pair of graphs look at the relationship between FICO scores and the 
           Number of Credit Inquiries in the past 6 months. Those with unpaid loans 
           have more credit inquiries, at all FICO scores. This is interesting, because 
           many credit inquiries directly lower FICO scores, so the unpaid loan status 
           seems to be a difference maker.
          </p>
        </div>
          <div class="gallery">
            <img src={ficoandinqfp}>
            </img>
          </div>
          <div class="gallery">
            <img src={ficoandinqnfp}>
            </img>
          </div>
        </div>



        <div class="desc">
          <p></p>
        </div>

        <div class="boxGallery">
          <div class="gallery">
            <img src={pika}>
            </img>
          </div>
          <div class="gallery">
            <img src={truth}>
            </img>
          </div>
          <div class="gallery">
            <img src={truth}>
            </img>
          </div>
          <div class="gallery">
            <img src={pika}>
            </img>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
