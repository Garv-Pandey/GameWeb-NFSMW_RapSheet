import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { DottedLine } from "../../components/DottedLine"
import styles from "./PursuitDetails.module.css"

export function PursuitDetails(props) {
    const { id } = useParams()

    const buttonData = [
        { symbol: "Esc", text: "Back" },
      ]

    const pursuit_details = {
        "MW-0X7I6R3Z": {
            "pursuitId": "MW-0X7I6R3Z",
            "pursuitLength": "1:45.02",
            "totalPoliceVehiclesInvolved": 38,
            "policeVehiclesDamaged": 2,
            "policeVehiclesImmobilized": 12,
            "roadblocksDodged": 1,
            "spikeStripsDodged": 1,
            "costToStateAchieved": 96625,
            "infractionsRecorded": 6,
            "helicoptersDeployed": 1,
            "pursuitBountyAchieved": 715000
        },
        "MW-1Q3C3V5T": {
            "pursuitId": "MW-1Q3C3V5T",
            "pursuitLength": "2:35.69",
            "totalPoliceVehiclesInvolved": 31,
            "policeVehiclesDamaged": 6,
            "policeVehiclesImmobilized": 6,
            "roadblocksDodged": 4,
            "spikeStripsDodged": 4,
            "costToStateAchieved": 71325,
            "infractionsRecorded": 8,
            "helicoptersDeployed": 1,
            "pursuitBountyAchieved": 650000
        }
    }

    const currentPursuit = pursuit_details[id]

    return (
        <div className={styles.pursuit_details}>
            <Header title={"Pursuit Detial"} />

            <ul className={styles.vertical_list}>
                <li>Name: Gabbu</li>
                <li>Pursuit ID: {id}</li>
            </ul>

            <DottedLine />

            <div className={styles.tableContainer}>
                <div className={styles.row}>
                    <div className={styles.label}>Pursuit Length</div>
                    <div className={styles.value}>{currentPursuit.pursuitLength}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.label}>TOTAL POLICE VEHICLES INVOLVED</div>
                    <div className={styles.value}>{currentPursuit.totalPoliceVehiclesInvolved}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.label}>POLICE VEHICLES DAMAGED</div>
                    <div className={styles.value}>{currentPursuit.policeVehiclesDamaged}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.label}>POLICE VEHICLES IMMOBILIZED</div>
                    <div className={styles.value}>{currentPursuit.policeVehiclesImmobilized}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.label}>ROADBLOCKS DODGED</div>
                    <div className={styles.value}>{currentPursuit.roadblocksDodged}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.label}>SPIKE STRIPS DODGED</div>
                    <div className={styles.value}>{currentPursuit.spikeStripsDodged}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.label}>COST TO STATE ACHIEVED</div>
                    <div className={styles.value}>{currentPursuit.costToStateAchieved}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.label}>INFRACTIONS RECORDED</div>
                    <div className={styles.value}>{currentPursuit.infractionsRecorded}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.label}>HELICOPTERS DEPLOYED</div>
                    <div className={styles.value}>{currentPursuit.helicoptersDeployed}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.label}>PURSUIT BOUNTY ACHIEVED</div>
                    <div className={styles.value}>{currentPursuit.pursuitBountyAchieved}</div>
                </div>
            </div>

            {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}
        </div>


    )
}