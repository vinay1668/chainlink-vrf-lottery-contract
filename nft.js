import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
<<<<<<< HEAD
import {  JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import {  LinkOutlined } from "@ant-design/icons"
=======
import {  StaticJsonRpcProvider, JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
>>>>>>> master
import "./App.css";
import {Row, Col, Button, Menu, Alert, Input, List, Card, Switch as SwitchD, Modal, InputNumber, Tooltip} from "antd";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useUserAddress } from "eth-hooks";
<<<<<<< HEAD
import { format } from "date-fns";
import { useExchangePrice, useGasPrice, useUserProvider, useContractLoader, useContractReader, useEventListener, useBalance, useExternalContractLoader } from "./hooks";
import { Header, Account, Faucet, Ramp, Contract, GasGauge, Address, AddressInput, ThemeSwitch } from "./components";
=======
import { useExchangePrice, useGasPrice, useUserProvider, useContractLoader, useContractReader, useEventListener, useBalance, useExternalContractLoader, useOnBlock } from "./hooks";
import { Header, Account, Faucet, Ramp, Contract, GasGauge, ThemeSwitch } from "./components";
>>>>>>> master
import { Transactor } from "./helpers";
import { formatEther, parseEther } from "@ethersproject/units";
import { utils, constants } from "ethers";
//import Hints from "./Hints";
import { Hints, ExampleUI, Subgraph } from "./views"
import { useThemeSwitcher } from "react-css-theme-switcher";
import { INFURA_ID, DAI_ADDRESS, DAI_ABI, NETWORK, NETWORKS } from "./constants";
import StackGrid from "react-stack-grid";
import ReactJson from 'react-json-view'
import assets from './assets.js'

const { BufferList } = require('bl')
// https://www.npmjs.com/package/ipfs-http-client
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

console.log("📦 Assets: ",assets)

/*
    Welcome to 🏗 scaffold-eth !
	@@ -62,44 +39,9 @@ console.log("📦 Assets: ",assets)
const targetNetwork = NETWORKS['localhost']; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

// 😬 Sorry for all the console logging
const DEBUG = false

//EXAMPLE STARTING JSON:
const STARTING_JSON = {
  "description": "It's actually a bison?",
  "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  "image": "https://austingriffith.com/images/paintings/buffalo.jpg",
  "name": "Buffalo",
  "attributes": [
     {
       "trait_type": "BackgroundColor",
       "value": "green"
     },
     {
       "trait_type": "Eyes",
       "value": "googly"
     }
  ]
}

<<<<<<< HEAD
//helper function to "Get" from IPFS
// you usually go content.toString() after this...
const getFromIPFS = async hashToGet => {
  for await (const file of ipfs.get(hashToGet)) {
    console.log(file.path)
    if (!file.content) continue;
    const content = new BufferList()
    for await (const chunk of file.content) {
      content.append(chunk)
    }
    console.log(content)
    return content
  }
}

=======
>>>>>>> master
// 🛰 providers
if(DEBUG) console.log("📡 Connecting to Mainnet Ethereum");
// const mainnetProvider = getDefaultProvider("mainnet", { infura: INFURA_ID, etherscan: ETHERSCAN_KEY, quorum: 1 });
	@@ -165,64 +107,6 @@ function App(props) {
  //
  // If you want to bring in the mainnet DAI contract it would look like:
  const mainnetDAIContract = useExternalContractLoader(mainnetProvider, DAI_ADDRESS, DAI_ABI)
<<<<<<< HEAD
  if (DEBUG) console.log("🌍 DAI contract on mainnet:",mainnetDAIContract)
  //
  // Then read your DAI balance like:
  const myMainnetDAIBalance = useContractReader({DAI: mainnetDAIContract},"DAI", "balanceOf",["0x34aA3F359A9D614239015126635CE7732c18fDF3"])
  if (DEBUG)console.log("🥇 myMainnetDAIBalance:",myMainnetDAIBalance)


  // keep track of a variable from the contract in the local React state:
  const balance = useContractReader(readContracts,"YourCollectible", "balanceOf", [ address ])
  if (DEBUG) console.log("🤗 balance:",balance)

  //📟 Listen for broadcast events
  const transferEvents = useEventListener(readContracts, "YourCollectible", "Transfer", localProvider, 1);
  if (DEBUG) console.log("📟 Transfer events:",transferEvents)


  const [modalVisible, setModalVisible] = useState(false);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [auctionDetails, setAuctionDetails] = useState({price: "", duration: ""});
  const [auctionToken, setAuctionToken] = useState("");
  const [viewAuctionToken, setViewAuctionToken] = useState("");

  //
  // 🧠 This effect will update yourCollectibles by polling when your balance changes
  //
  const yourBalance = balance && balance.toNumber && balance.toNumber()
  const [ yourCollectibles, setYourCollectibles ] = useState()

  // useEffect(()=>{
  //   const updateYourCollectibles = async () => {
  //     let collectibleUpdate = []
  //     for(let tokenIndex=0;tokenIndex<balance;tokenIndex++){
  //       try{
  //         console.log("GEtting token index",tokenIndex)
  //         const tokenId = await readContracts.YourCollectible.tokenOfOwnerByIndex(address, tokenIndex)
  //         console.log("tokenId",tokenId)
  //         const tokenURI = await readContracts.YourCollectible.tokenURI(tokenId)
  //         console.log("tokenURI",tokenURI)
  //
  //         const ipfsHash =  tokenURI.replace("https://ipfs.io/ipfs/","")
  //         console.log("ipfsHash",ipfsHash)
  //
  //         const jsonManifestBuffer = await getFromIPFS(ipfsHash)
  //
  //         try{
  //           const jsonManifest = JSON.parse(jsonManifestBuffer.toString())
  //           // console.log("jsonManifest",jsonManifest)
  //           collectibleUpdate.push({ id:tokenId, uri:tokenURI, owner: address, ...jsonManifest })
  //         }catch(e){console.log(e)}
  //
  //       }catch(e){console.log(e)}
  //     }
  //     setYourCollectibles(collectibleUpdate)
  //   }
  //   updateYourCollectibles()
  // },[ address, yourBalance ])
=======

  // If you want to call a function on a new block
  useOnBlock(mainnetProvider, () => {
	@@ -237,7 +121,6 @@ function App(props) {

  //📟 Listen for broadcast events
  const setPurposeEvents = useEventListener(readContracts, "YourContract", "SetPurpose", localProvider, 1);
>>>>>>> master

  /*
  const addressFromENS = useResolveName(mainnetProvider, "austingriffith.eth");
	@@ -323,224 +206,29 @@ function App(props) {
    )
  }


  const [ yourJSON, setYourJSON ] = useState( STARTING_JSON );
  const [ sending, setSending ] = useState()
  const [ ipfsHash, setIpfsHash ] = useState()
  const [ ipfsDownHash, setIpfsDownHash ] = useState()

  const [ downloading, setDownloading ] = useState()
  const [ ipfsContent, setIpfsContent ] = useState()
  const [yourBid, setYourBid] = useState({});

  const [ transferToAddresses, setTransferToAddresses ] = useState({})

  const [ loadedAssets, setLoadedAssets ] = useState()
  const updateYourCollectibles = async () => {
    let assetUpdate = []
    for(let a in assets){
      try{
        const forSale = await readContracts.YourCollectible.forSale(utils.id(a))
        let owner
        let auctionInfo
        if(!forSale){
          const tokenId = await readContracts.YourCollectible.uriToTokenId(utils.id(a))
          owner = await readContracts.YourCollectible.ownerOf(tokenId)
          const nftAddress = readContracts.YourCollectible.address;
          auctionInfo = await readContracts.Auction.getTokenAuctionDetails(nftAddress, tokenId);
        }


        assetUpdate.push({id:a,...assets[a],forSale:forSale,owner:owner, auctionInfo})
      }catch(e){console.log(e)}
    }
    setLoadedAssets(assetUpdate)
  }
  useEffect(()=>{
    if(readContracts && readContracts.YourCollectible) updateYourCollectibles()
  }, [ assets, readContracts, transferEvents ]);

  const startAuction = (tokenUri) => {
    return async () => {
      setAuctionToken(tokenUri);
      setModalVisible(true);
    }
  }

  const placeBid = async (tokenUri, ethAmount) => {
    const tokenId = await readContracts.YourCollectible.uriToTokenId(utils.id(tokenUri));
    const nftAddress = readContracts.YourCollectible.address;
    await tx( writeContracts.Auction.bid(nftAddress, tokenId, {
      value: parseEther(ethAmount.toString())
    }));
    updateYourCollectibles();
  }

  const completeAuction = (tokenUri) => {
    return async () => {
      const tokenId = await readContracts.YourCollectible.uriToTokenId(utils.id(tokenUri));
      const nftAddress = readContracts.YourCollectible.address;
      await tx(writeContracts.Auction.executeSale(nftAddress, tokenId));
      updateYourCollectibles();
    }
  }

  const cancelAuction = (tokenUri) => {
    return async () => {
      const tokenId = await readContracts.YourCollectible.uriToTokenId(utils.id(tokenUri));
      const nftAddress = readContracts.YourCollectible.address;
      await tx(writeContracts.Auction.cancelAuction(nftAddress, tokenId));
      updateYourCollectibles();
    }
  }

  let galleryList = []
  for(let a in (loadedAssets ? loadedAssets.slice(0, 6) : [])){
    // console.log("loadedAssets",a,loadedAssets[a])

    let cardActions = []
    let auctionDetails = [];
    if(loadedAssets[a].forSale){
      cardActions.push(
        <div>
          <Button onClick={()=>{
            // console.log("gasPrice,",gasPrice)
            tx( writeContracts.YourCollectible.mintItem(loadedAssets[a].id,{gasPrice:gasPrice}) )
          }}>
            Mint
          </Button>
        </div>
      )
      auctionDetails.push(null)
    }else{
      const { auctionInfo } = loadedAssets[a];
      const deadline = new Date(auctionInfo.duration * 1000);
      const isEnded = deadline <= new Date();

      cardActions.push(
        <div>
          <div>
          owned by: <Address
            address={loadedAssets[a].owner}
            ensProvider={mainnetProvider}
            blockExplorer={blockExplorer}
            minimized={true}
          />
          </div>
          {!loadedAssets[a].auctionInfo.isActive && address === loadedAssets[a].owner && <><Button style={{ marginBottom: "10px" }} onClick={startAuction(loadedAssets[a].id)} disabled={address !== loadedAssets[a].owner}>Start auction</Button><br/></>}
          {loadedAssets[a].auctionInfo.isActive && address === loadedAssets[a].auctionInfo.seller && <><Button style={{ marginBottom: "10px" }} onClick={completeAuction(loadedAssets[a].id)}>Complete auction</Button><br/></>}
          {loadedAssets[a].auctionInfo.isActive && address === loadedAssets[a].auctionInfo.seller && <><Button style={{ marginBottom: "10px" }} onClick={cancelAuction(loadedAssets[a].id)}>Cancel auction</Button><br/></>}
        </div>
      )

      auctionDetails.push(auctionInfo.isActive ? (
          <div style={{ marginTop: "20px" }}>
            <p style={{ fontWeight: "bold" }}>Auction is in progress</p>
            <p style={{ margin: 0, marginBottom: "2px"}}>Minimal price is {utils.formatEther(auctionInfo.price)} ETH</p>
            <p style={{ marginTop: 0 }}>{!isEnded ? `Auction ends at ${format(deadline, "MMMM dd, hh:mm:ss")}` : 'Auction has already ended'}</p>
            <div>
              {auctionInfo.maxBidUser === constants.AddressZero ? "Highest bid was not made yet" : <div>Highest bid by: <Address
                  address={auctionInfo.maxBidUser}
                  ensProvider={mainnetProvider}
                  blockExplorer={blockExplorer}
                  minimized={true}
              /><p>{utils.formatEther(auctionInfo.maxBid)} ETH</p></div>}
            </div>

            <div>
            <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
              <p style={{margin:0, marginRight: "15px"}}>Your bid in ETH: </p>
              <InputNumber placeholder="0.1" value={yourBid[loadedAssets[a].id]} onChange={newBid => setYourBid({...yourBid, [loadedAssets[a].id]: newBid})} style={{ flexGrow: 1 }}/>
            </div>
              <Button style={{marginTop: "7px"}} onClick={() => placeBid(loadedAssets[a].id, yourBid[loadedAssets[a].id])} disabled={!yourBid[loadedAssets[a].id] || isEnded}>Place a bid</Button>
            </div>

          </div>
      ) : null);
    }

    galleryList.push(
        <>
      <Card style={{width:300}} key={loadedAssets[a].name}
        actions={cardActions}
        title={(
          <div>
            {loadedAssets[a].name} <a style={{cursor:"pointer",opacity:0.33}} href={loadedAssets[a].external_url} target="_blank"><LinkOutlined /></a>
          </div>
        )}
      >
        <img style={{maxWidth:130}} src={loadedAssets[a].image}/>
        <div style={{opacity:0.77}}>
          {loadedAssets[a].description}
        </div>
        {auctionDetails}
      </Card>
          </>
    )
  }


  const handleOk = async () => {
    setModalVisible(false);
    const { price, duration } = auctionDetails;
    const tokenId = await readContracts.YourCollectible.uriToTokenId(utils.id(auctionToken));

    const auctionAddress = readContracts.Auction.address;
    const nftAddress = readContracts.YourCollectible.address;
    await writeContracts.YourCollectible.approve(auctionAddress, tokenId);

    const ethPrice = utils.parseEther(price.toString());
    const blockDuration = Math.floor(new Date().getTime() / 1000) + duration;

    await tx(writeContracts.Auction.createTokenAuction(nftAddress, tokenId, ethPrice, blockDuration, { gasPrice }));

    const auctionInfo = await readContracts.Auction.getTokenAuctionDetails(nftAddress, tokenId);
    console.log('auctionInfo', { auctionInfo });
  }

  const handleCancel = () => {
    setModalVisible(false);
  }

  return (
    <div className="App">

      <Modal title="Start auction" visible={modalVisible} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ disabled: !auctionDetails.price || !auctionDetails.duration }} okText="Start">
        <div style={{display: "flex", alignItems: "center"}}>
          <p style={{margin:0, marginRight: "15px"}}>ETH price (minimal bid): </p>
          <InputNumber placeholder="0.1" value={auctionDetails.price} onChange={newPrice => setAuctionDetails({...auctionDetails, price: newPrice})} style={{ flexGrow: 1 }}/>
        </div>
        <br/>
        <div style={{display: "flex", alignItems: "center"}}>
          <p style={{margin:0, marginRight: "15px"}}>Duration in seconds: </p>
          <InputNumber placeholder="3600" value={auctionDetails.duration} onChange={newDuration => setAuctionDetails({...auctionDetails, duration: newDuration})} style={{ flexGrow: 1 }}/>
        </div>
      </Modal>

      {/* ✏️ Edit the header and change the title to your project name */}
      <Header />
      {networkDisplay}

      <BrowserRouter>

        <Menu style={{ textAlign:"center" }} selectedKeys={[route]} mode="horizontal">
          <Menu.Item key="/">
            <Link onClick={()=>{setRoute("/")}} to="/">Gallery</Link>
          </Menu.Item>
          <Menu.Item key="/yourcollectibles">
            <Link onClick={()=>{setRoute("/yourcollectibles")}} to="/yourcollectibles">YourCollectibles</Link>
          </Menu.Item>
          <Menu.Item key="/transfers">
            <Link onClick={()=>{setRoute("/transfers")}} to="/transfers">Transfers</Link>
          </Menu.Item>
          <Menu.Item key="/ipfsup">
            <Link onClick={()=>{setRoute("/ipfsup")}} to="/ipfsup">IPFS Upload</Link>
          </Menu.Item>
          <Menu.Item key="/ipfsdown">
            <Link onClick={()=>{setRoute("/ipfsdown")}} to="/ipfsdown">IPFS Download</Link>
          </Menu.Item>
          <Menu.Item key="/debugcontracts">
            <Link onClick={()=>{setRoute("/debugcontracts")}} to="/debugcontracts">Debug Contracts</Link>
          </Menu.Item>
        </Menu>

	@@ -552,164 +240,76 @@ function App(props) {
                and give you a form to interact with it locally
            */}

            <div style={{ maxWidth:1024, margin: "auto", marginTop:32, paddingBottom:56 }}>
              <Button disabled={galleryList.length === 0} onClick={updateYourCollectibles} style={{marginBottom: "25px"}}>Update collectibles</Button>

              <StackGrid
                columnWidth={300}
                gutterWidth={16}
                gutterHeight={16}
              >
                {galleryList}
              </StackGrid>
            </div>

          </Route>

          <Route path="/yourcollectibles">
            <div style={{ width:640, margin: "auto", marginTop:32, paddingBottom:32 }}>
              <List
                bordered
                dataSource={yourCollectibles}
                renderItem={(item) => {
                  const id = item.id.toNumber()
                  return (
                    <List.Item key={id+"_"+item.uri+"_"+item.owner}>
                      <Card title={(
                        <div>
                          <span style={{fontSize:16, marginRight:8}}>#{id}</span> {item.name}
                        </div>
                      )}>
                        <div><img src={item.image} style={{maxWidth:150}} /></div>
                        <div>{item.description}</div>
                      </Card>

                      <div>
                        owner: <Address
                            address={item.owner}
                            ensProvider={mainnetProvider}
                            blockExplorer={blockExplorer}
                            fontSize={16}
                        />
                        <AddressInput
                          ensProvider={mainnetProvider}
                          placeholder="transfer to address"
                          value={transferToAddresses[id]}
                          onChange={(newValue)=>{
                            let update = {}
                            update[id] = newValue
                            setTransferToAddresses({ ...transferToAddresses, ...update})
                          }}
                        />
                        <Button onClick={()=>{
                          console.log("writeContracts",writeContracts)
                          tx( writeContracts.YourCollectible.transferFrom(address, transferToAddresses[id], id) )
                        }}>
                          Transfer
                        </Button>
                      </div>
                    </List.Item>
                  )
                }}
              />
            </div>
          </Route>

          <Route path="/transfers">
            <div style={{ width:600, margin: "auto", marginTop:32, paddingBottom:32 }}>
              <List
                bordered
                dataSource={transferEvents}
                renderItem={(item) => {
                  return (
                    <List.Item key={item[0]+"_"+item[1]+"_"+item.blockNumber+"_"+item[2].toNumber()}>
                      <span style={{fontSize:16, marginRight:8}}>#{item[2].toNumber()}</span>
                      <Address
                          address={item[0]}
                          ensProvider={mainnetProvider}
                          fontSize={16}
                      /> =>
                      <Address
                          address={item[1]}
                          ensProvider={mainnetProvider}
                          fontSize={16}
                      />
                    </List.Item>
                  )
                }}
              />
            </div>
          </Route>

          <Route path="/ipfsup">
            <div style={{ paddingTop:32, width:740, margin:"auto", textAlign:"left" }}>
              <ReactJson
                style={{ padding:8 }}
                src={yourJSON}
                theme={"pop"}
                enableClipboard={false}
                onEdit={(edit,a)=>{
                  setYourJSON(edit.updated_src)
                }}
                onAdd={(add,a)=>{
                  setYourJSON(add.updated_src)
                }}
                onDelete={(del,a)=>{
                  setYourJSON(del.updated_src)
                }}
              />
            </div>

            <Button style={{margin:8}} loading={sending} size="large" shape="round" type="primary" onClick={async()=>{
                console.log("UPLOADING...",yourJSON)
                setSending(true)
                setIpfsHash()
                const result = await ipfs.add(JSON.stringify(yourJSON))//addToIPFS(JSON.stringify(yourJSON))
                if(result && result.path) {
                  setIpfsHash(result.path)
                }
                setSending(false)
                console.log("RESULT:",result)
            }}>Upload to IPFS</Button>

            <div  style={{padding:16,paddingBottom:150}}>
              {ipfsHash}
            </div>

          </Route>
          <Route path="/ipfsdown">
              <div style={{ paddingTop:32, width:740, margin:"auto" }}>
                <Input
                  value={ipfsDownHash}
                  placeHolder={"IPFS hash (like QmadqNw8zkdrrwdtPFK1pLi8PPxmkQ4pDJXY8ozHtz6tZq)"}
                  onChange={(e)=>{
                    setIpfsDownHash(e.target.value)
                  }}
                />
              </div>
              <Button style={{margin:8}} loading={sending} size="large" shape="round" type="primary" onClick={async()=>{
                  console.log("DOWNLOADING...",ipfsDownHash)
                  setDownloading(true)
                  setIpfsContent()
                  const result = await getFromIPFS(ipfsDownHash)//addToIPFS(JSON.stringify(yourJSON))
                  if(result && result.toString) {
                    setIpfsContent(result.toString())
                  }
                  setDownloading(false)
              }}>Download from IPFS</Button>

              <pre  style={{padding:16, width:500, margin:"auto",paddingBottom:150}}>
                {ipfsContent}
              </pre>
          </Route>
          <Route path="/debugcontracts">
              <Contract
                name="YourCollectible"
                signer={userProvider.getSigner()}
                provider={localProvider}
                address={address}
                blockExplorer={blockExplorer}
              />
          </Route>
        </Switch>
      </BrowserRouter>
	@@ -762,6 +362,7 @@ function App(props) {
         <Row align="middle" gutter={[4, 4]}>
           <Col span={24}>
             {
               /*  if the local provider has a signer, let's show the faucet:  */
               faucetAvailable ? (
                 <Faucet localProvider={localProvider} price={price} ensProvider={mainnetProvider}/>
	@@ -815,4 +416,4 @@ const logoutOfWeb3Modal = async () => {
  }, 1);
})

export default App;