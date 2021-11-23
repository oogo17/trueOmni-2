using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using DotNetApi.Dtos;

namespace DotNetApi.Clients
{
    public class TrueOmniClient
    {
        private readonly HttpClient _httpClient;
        public TrueOmniClient(HttpClient httpClient)
        {
            httpClient.BaseAddress = new Uri("https://webservice.trueomni.com/");
            _httpClient = httpClient;
        }

        public async Task<List<Organization>> GetCompanies ()
        {
            var response = await _httpClient.GetAsync("/json.aspx?domainid=2248&fn=listings");
            response.EnsureSuccessStatusCode();
            List<Organization> responseApi = await response.Content.ReadFromJsonAsync<List<Organization>>();            
            
            var distinctFiltered = DisctinctFilter(responseApi);
            var addPrefixToCompany = AddPrefixToCompany(distinctFiltered);
            return addPrefixToCompany;
        }


        public List<Organization> DisctinctFilter(List<Organization> organizations)
        {
            List<Organization> organizationsFiltered = new ();
            organizationsFiltered = organizations.DistinctBy(x => new {x.ListingID, x.Company, x.Image_List, x.CategoryID}).ToList();
                                //organizations.GroupBy(x => new {x.CategoryID}).Select(x => x.FirstOrDefault()).ToList();
            return organizations;
        }

        public List<Organization> AddPrefixToCompany(List<Organization> organizations)
        {
            List<Organization> ListOrganization = new ();
            ListOrganization.AddRange(organizations);
            ListOrganization.AddRange(organizations);

            ListOrganization.GroupBy(x => x.Company).ToList();        

            return ListOrganization;
        }
        
    }
}