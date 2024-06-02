<script>
  import languages from '../lib/languages.json';
  import currentLang from '../lib/stores.js';
  export let selectedLanguage = currentLang.get() || 'en';

  let dropdownOptions = [];

  const setDropdownOptions = (lang) => {
    let options = languages[lang].translations;
    return Object.keys(options).map(key => ({
      code: key,
      label: options[key]
    })).sort((a, b) => a.label.localeCompare(b.label));
  };

  $: dropdownOptions = setDropdownOptions(selectedLanguage);

  function handleChange(event) {
    selectedLanguage = event.target.value; 
    currentLang.set(selectedLanguage);
  }
</script>

<div>
  <label for="language-select"></label>
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
