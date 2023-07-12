import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("Aykut");

  const [description, setDescription] = useState("");

  const genders = [
    { key: "1", value: "Erkek" },
    { key: "2", value: "Kadın" },
  ];
  const [gender, setGender] = useState("");
  // const selectedGender = useMemo(() => { return genders[gender]; }, [gender]);
  const selectedGender = genders.find((i) => i.key === gender);

  const categoryList = [
    { key: 1, value: "PHP" },
    { key: 2, value: "JS" },
    { key: 3, value: "CSS" },
    { key: 4, value: "HTML" },
  ];
  const [categories, setCategories] = useState([2, 4]);
  const selectedCategories = categories && categoryList.filter((i) => categories.includes(i.key));

  const [rule, setRule] = useState(true);

  const [rules, setRules] = useState([
    { key: 1, value: "1. kuralı kabul ediyorum", checked: false },
    { key: 2, value: "2. kuralı kabul ediyorum", checked: false },
    { key: 3, value: "3. kuralı kabul ediyorum", checked: true },
  ]);
  const checkRule = (key, checked) => {
    setRules((rules) =>
      rules.map((rule) => {
        if (key === rule.key) rule.checked = checked;
        return rule;
      })
    );
  };
  const enabled = rules.every((rule) => rule.checked)

  const [level, setLevel] = useState("jr_developer");
  const levels = [
    { key: "beginner", value: "Başlangıç" },
    { key: "jr_developer", value: "Jr. Developer" },
    { key: "sr_developer", value: "Sr. Developer" },
  ];
  const selectedLevel = levels.find((i) => i.key === level);

  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState(false);

  const enabledAvatar = rules.every((rule) => rule.checked) && avatar;

  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", function () {
        setImage(this.result);
      });
      fileReader.readAsDataURL(avatar);
    }
  }, [avatar]);

  const submitHandle = () => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("name", name);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    }).then((res) => console.log(res));
  };

  return (
    <>
      <button onClick={() => setName("Hrmnc")}>Adı değiştir</button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> {name}
      <br />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} /> {description}
      <br />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Seçin</option>
        {genders.map((gender) => (
          <option value={gender.key} key={gender.key}>
            {gender.value}
          </option>
        ))}
      </select>
      <pre>{JSON.stringify(selectedGender, null, 2)}</pre>
      <br />
      <button onClick={() => setCategories([2, 3, 4])}>Kategorileri Seç</button>
      <select value={categories} multiple={true} onChange={(e) => setCategories([...e.target.selectedOptions].map((option) => +option.value))}>
        {categoryList.map((category) => (
          <option value={category.key} key={category.key}>
            {category.value}
          </option>
        ))}
      </select>
      <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>
      <br />
      <label>
        <input type="checkbox" checked={rule} onChange={(e) => setRule(e.target.checked)} />
        Kuralları kabul ediyorum.
      </label>
      <br />
      {rules.map((rule) => (
        <label key={rule.key}>
          <input type="checkbox" checked={rule.checked} onChange={(e) => checkRule(rule.key, e.target.checked)} />
          {rule.value}
        </label>
      ))}
      <button disabled={!enabled} onClick={submitHandle}>Devam et</button>
      <pre>{JSON.stringify(rules, null, 2)}</pre>
      <br />
      {levels.map((l, index) => (
        <label key={index}>
          <input type="radio" value={l.key} checked={l.key === level} onChange={(e) => setLevel(e.target.value)} />
          {l.value}
        </label>
      ))}
      {JSON.stringify(selectedLevel)}
      <br />
      <label>
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </label>
      {avatar && (
        <>
          <h3>{avatar.name}</h3>
          {image && <img src={image} alt="" />}
        </>
      )}
      <button disabled={!enabledAvatar} onClick={submitHandle}>
        Devam et
      </button>
    </>
  );
}

export default App;
