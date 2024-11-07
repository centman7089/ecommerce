const backendDomain = 'http://localhost:5000'

const SummaryApi = {
    signup : {
        url: `${ backendDomain }/api/user/signup`,
        method:"post"
    }
}

export default SummaryApi