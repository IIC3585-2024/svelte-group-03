<script>
  export let selectedLanguage = 'en';
  export let onLanguageChange;

  import languages from '../lib/languages.json';

  let dropdownOptions = [];

  const setDropdownOptions = (lang) => {
    return Object.keys(languages).map(key => ({
      code: languages[key].code,
      label: languages[key].translations[lang]
    })).sort((a, b) => a.label.localeCompare(b.label));
  };

  $: dropdownOptions = setDropdownOptions(selectedLanguage);

  function handleChange(event) {
    selectedLanguage = event.target.value;
    onLanguageChange(selectedLanguage); 
  }
</script>

<div>
  <label for="language-select">Select Language:</label>
  <select id="language-select" bind:value={selectedLanguage} on:change={handleChange}>
    {#each dropdownOptions as option}
      <option value={option.code}>{option.label}</option>
    {/each}
  </select>
</div>

<style>
  select {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
