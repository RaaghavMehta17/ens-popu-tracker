import { Bytes, BigInt } from "@graphprotocol/graph-ts";
import { ENSDomain, Ownership } from "../generated/schema";
import { NewOwner, Transfer } from "../generated/ENSRegistryWithFallback/ENSRegistryWithFallback";

export function handleTransfer(event: Transfer): void {
  let domainId = event.params.node.toHexString();
  let domain = ENSDomain.load(domainId);

  if (!domain) {
    domain = new ENSDomain(domainId);
    domain.registrationDate = event.block.timestamp;
    domain.totalTransfers = 0;
    domain.owner = Bytes.empty();
    domain.expiryDate = BigInt.zero(); 
  }

  if (domain.owner != event.params.owner) {
    let ownership = new Ownership(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
    ownership.domain = domain.id;
    ownership.owner = event.params.owner;
    ownership.transferDate = event.block.timestamp;
    ownership.save();

    domain.owner = event.params.owner;
    domain.totalTransfers = domain.totalTransfers + 1;
    domain.save();
  }
}

export function handleNewOwner(event: NewOwner): void {
  let domainId = event.params.node.toHexString();
  let domain = ENSDomain.load(domainId);

  if (!domain) {
    domain = new ENSDomain(domainId);
    domain.registrationDate = event.block.timestamp;
    domain.totalTransfers = 0;
    domain.owner = Bytes.empty();
    domain.expiryDate = BigInt.zero();
  }

  if (domain.owner != event.params.owner) {
    let ownership = new Ownership(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
    ownership.domain = domain.id;
    ownership.owner = event.params.owner;
    ownership.transferDate = event.block.timestamp;
    ownership.save();

    domain.owner = event.params.owner;
    domain.save();
  }
}
