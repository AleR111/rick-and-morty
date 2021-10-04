import { Search, Clear, FilterAlt } from "@mui/icons-material"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  ButtonGroup,
} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { clearData } from "../../../store/characters"
import { getCharacters } from "../../../store/characters/thunks"
import { clearFilter, setFilterUrl, setFilter } from "../../../store/filters"
import styles from "./filters.module.scss"

export const Filters = ({ firstPage }) => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.filtersStore)

  const handleChange = (e) => {
    dispatch(setFilter(e.target.name, e.target.value))
  }

  const search = () => {
    let filter = ""
    for (const key in filters) {
      if (!filters[key]) continue
      filter += `${key}=${filters[key]}&`
    }
    if (!filter) return
    dispatch(setFilterUrl(filter))
    dispatch(clearData())
    firstPage()
    dispatch(getCharacters(filter, 1))
  }

  const clear = () => {
    dispatch(clearFilter())
    dispatch(clearData())
    dispatch(getCharacters(`page=${1}`, 1))
    firstPage()
  }

  return (
    <div className={styles.filters}>
      <FormControl>
        <FilterAlt color="primary" fontSize="large" />
      </FormControl>
      <FormControl className={styles.formControl}>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="standard"
          value={filters.name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl variant="standard" className={styles.formControl}>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          labelId="status-label"
          id="status"
          name="status"
          value={filters.status}
          onChange={handleChange}
          label="Status"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className={styles.input} value={"alive"}>
            Alive
          </MenuItem>
          <MenuItem value={"dead"}>Dead</MenuItem>
          <MenuItem value={"unknown"}>Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={styles.formControl}>
        <TextField
          id="species"
          name="species"
          label="Species"
          variant="standard"
          value={filters.species}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl className={styles.formControl}>
        <TextField
          id="type"
          name="type"
          label="Type"
          variant="standard"
          value={filters.type}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl variant="standard" className={styles.formControl}>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          id="gender"
          name="gender"
          value={filters.gender}
          onChange={handleChange}
          label="Gender"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"genderless"}>Genderless</MenuItem>
          <MenuItem value={"unknown"}>Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <ButtonGroup orientation="horizontal" variant="text">
          <Button onClick={search}>
            <Search />
          </Button>
          <Button onClick={clear}>
            <Clear />
          </Button>
        </ButtonGroup>
      </FormControl>
    </div>
  )
}
