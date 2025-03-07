# ENS Domain Ownership Tracking Subgraph

This project is a subgraph designed to index and track ownership data for Ethereum Name Service (ENS) domains. Leveraging The Graph protocol, it enables efficient querying of ENS domain ownership histories, current owners, and transfer events.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Smart Contract Used](#smart-contract-used)
- [Setup and Deployment](#setup-and-deployment)

## Introduction

The Ethereum Name Service (ENS) provides a decentralized naming system, allowing users to register human-readable names for their Ethereum addresses. This subgraph indexes on-chain events related to ENS domains, facilitating efficient querying of domain ownership data.

## Features

- **Track ENS Domain Ownership:** Monitor current and historical ownership of ENS domains.
- **Ownership History:** Retrieve transfer histories for specific domains.
- **Efficient Queries:** Utilize GraphQL to perform precise and efficient data retrieval.

## Smart Contract Used

This subgraph interacts with the `ENSRegistryWithFallback` smart contract, which serves as the core registry for the ENS system. This contract maintains a list of all registered domains, recording information such as the owner, resolver, and Time-To-Live (TTL) for each domain. The `ENSRegistryWithFallback` contract ensures that if a record does not exist in the current registry, it can fallback to an older registry for resolution.

- **Contract Name:** ENSRegistryWithFallback
- **Contract Address:** `0x00000000000C2E074eC69A0dFb2997Ba6C7d2e1e`
- **Source:** https://etherscan.io/address/0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e 


## Setup and Deployment

To set up and deploy the subgraph, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/RaaghavMehta17/ens-popu-tracker.git
   cd ens-domain-ownership-subgraph
   ```
   
2.**Install Dependencies:**

Ensure you have Node.js and Yarn installed. Then, run:
  
   ```bash
   npm install -g @graphprotocol/graph-cli
   ```

3.**Generate and Build the Subgraph:**

   ```bash
   yarn codegen
   yarn build
   ```

4.**Authenticate with the Graph:**

   ```bash
   graph auth --studio <YOUR_GRAPH_ACCESS_TOKEN>
   ```

5.**Deploy the Subgraph:**

   ```bash
   graph deploy --studio <SUBGRAPH_NAME>
   ```



