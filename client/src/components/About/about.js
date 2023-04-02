import React from 'react'
import './about.css'
import bgimage from '../../utils/about.jpg'


const about = () => {
  return (
    <div className='main'>
      <span className='maintext'>Features</span>
      <span className='text'><b>Unlike centralized networks,</b> decentralized networks operate via a network of nodes. Each node in such a system operates with equal authority.
        This eliminates single points of control. Therefore a decentralized concept is more secure and resistant to censorship.<br />

        <b>Transparency and Immutability </b>
        in such a decentralized network, all transactions are recorded in an open, public ledger. This results in transparency and immutability. A transaction cannot be altered once it is recorded on the Blockchain.<br />

        <b>Security </b>
        centralized networks are more vulnerable to cyber-attacks and data breaches because all the data is stored in one central location. This makes it easier for hackers to target and steal sensitive information. On the other hand, decentralized networks use multiple nodes to store data. This makes it harder for hackers to compromise the entire network.<br />

        <b>Control </b>
        centralized organizations give more control to a central authority. This can make decision-making biased. Decentralized organizations, on the other hand, give more power to the users. Therefore, decentralized organizations make the network more democratic.<br />

        <b>Speed </b>
        centralized networks are usually slower. Centralized concepts have only one central authority even if the user activity is high. However, decentralized networks can be faster. This is due to the fact that several network administrators in a decentralized network can create master nodes in case user activity is high.<br />

        <b>Cost </b>
        centralized systems are generally more expensive to set up and maintain. This is because they require a large team to manage the network. Meanwhile, decentralized systems can be less expensive as they rely on a network of nodes to perform tasks. It reduces the need to maintain a large team in one place. However, the cost to maintain a decentralized concept is more than that of a centralized concept.<br />
      </span>
      <span className='maintext2'>Future goals  </span>
      <span className='text2'>
        <b>In-app advertisement </b>
        The main aim of in-app advertising applications is to allow their users a free download.
        Users see the advertisements. The data collected by the application helps in shortlisting which advertisement is best for a particular user.
        After that, the organization stores and presents the data to many advertising companies.<br/>

        <b>Donations </b>
        The craze and research involved in developing decentralized applications are increasing day by day.
        Several dApps are focusing on resolving everyday issues. Some of those are working towards a better goal.
        dApp development authorities directly ask users for donations on their official website/ dApp, which allows them to continue their research work.<br/>
        <b>Marketing through referral </b>
        The referral marketing approach favors a plethora of blockchain-powered platforms on the internet. It allows users to refer more than one dApp to other users. Depending on the referral consumption, the referral link generator gets a reward in digital currency.
      </span>
      
      <img src={bgimage} className='backimg' />
    </div>
  )
}

export default about
