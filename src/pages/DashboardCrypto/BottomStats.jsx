import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { formatCurrency } from "../../constants";
import numeral from "numeral";
import GeneralButton from "../GeneralButton";

const BottomStats = ({ walletAnalytics, walletData, currency }) => {
  const totalInv = walletData ? walletData["default"]?.totalInvested : 0;
  const sign = sessionStorage.getItem("currencySign") ?? null;
  return (
    <Col className="p-3 bg-light-subtle mb-3 d-flex flex-column gap-3">
      <div className="d-flex align-items-start justify-content-between px-3">
        <span className="fs-16 fw-semibold">Balances</span>
        <Link
          to={"/deposit"}
          className="btn bg-custom-gradient text-white border-0 text-capitalize"
        >
          deposit cash
        </Link>
      </div>
      <Row className="px-3">
        <Col
          //
          style={{ border: "solid 1px #dedede" }}
          className="border-1 border-dotted p-2"
          md={4}
        >
          <div className="d-flex flex-column">
            <span className="fs-17 fw-semibold text-nowrap">
              {sign}
              {walletAnalytics
                ? numeral(totalInv).format("0,0.00")
                : numeral(0).format("0,0.00")}
            </span>
            <span className="text-capitalize text-muted fs-14 fw-normal">
              total investments
            </span>
          </div>
        </Col>
        <Col
          style={{ border: "solid 1px #dedede" }}
          md={4}
          className="border-1 border-dotted p-2"
        >
          <div className="d-flex flex-column">
            <span className="fs-17 fw-semibold text-nowrap">
              {" "}
              {sign}
              {walletAnalytics
                ? numeral(walletAnalytics?.totalSavings).format("0,0.00")
                : numeral(0).format("0,0.00")}
            </span>
            <span className="text-capitalize text-muted fs-14 fw-normal">
              total savings
            </span>
          </div>
        </Col>
        <Col
          style={{ border: "solid 1px #dedede" }}
          md={4}
          className="border-1 border-dotted p-2"
        >
          <div className="d-flex flex-column">
            <span className="fs-17 fw-semibold text-nowrap">
              {sign}{" "}
              {walletAnalytics
                ? numeral(walletAnalytics?.cashBalance).format("0,0.00")
                : numeral(0).format("0,0.00")}
            </span>
            <span className="text-capitalize text-muted fs-14 fw-normal">
              cash balance
            </span>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default BottomStats;
