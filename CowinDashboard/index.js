// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    vaccinationCoverageData: [],
    vaccinationByAgeData: [],
    vaccinationByGenderData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(covidVaccinationDataApiUrl)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      const updatedVaccinationData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      const {last7DaysVaccination, vaccinationByAge, vaccinationByGender} =
        updatedVaccinationData
      this.setState({
        vaccinationCoverageData: last7DaysVaccination,
        vaccinationByAgeData: vaccinationByAge,
        vaccinationByGenderData: vaccinationByGender,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {
      vaccinationCoverageData,
      vaccinationByGenderData,
      vaccinationByAgeData,
    } = this.state
    return (
      <div className="success-view-container">
        <VaccinationCoverage data={vaccinationCoverageData} />
        <VaccinationByGender data={vaccinationByGenderData} />
        <VaccinationByAge data={vaccinationByAgeData} />
      </div>
    )
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="error-msg">Something Went Wrong</h1>
    </div>
  )

  renderLoader = () => (
    <div className="loader-view-container">
      <div data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
      </div>
    </div>
  )

  renderResults = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="heading-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <h1 className="heading">Co-WIN</h1>
          </div>
          <h1 className="heading-2">CoWIN Vaccination in India</h1>
          {this.renderResults()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
