import { Claude, Gemini, Grok, OpenAI, type IconType } from "@lobehub/icons"
import {
  IconArrowUpRightOutline18,
  IconChevronDownOutline18,
  IconMediaLibraryOutline18,
  IconMediaNextOutline18,
  IconMediaSkipToEndOutline18,
  IconMusicPlaylistOutline18,
  IconPlusOutline18,
} from "@nattstack/icons"
import {
  Button,
  Column,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxSearch,
  ComboboxTrigger,
  ComboboxValue,
  IconButton,
  Label,
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuLinkItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuTrigger,
  Row,
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  Button2,
  SelectTrigger,
  SelectValue,
  Spacer,
} from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import { DialogAppearance } from "#/components/dialog-appearance"

const ICON_SIZE = 18

interface Model {
  description?: string
  icon?: IconType
  label: string
  value: string
}

const MODELS: Model[] = [
  {
    description: "Max",
    icon: Claude.Color,
    label: "Fable 5",
    value: "fable-5",
  },
  {
    description: "High Fast",
    icon: Grok,
    label: "Grok 4.5",
    value: "grok-4.5",
  },
  {
    description: "Medium",
    icon: OpenAI,
    label: "GPT-5.6 Sol",
    value: "gpt-5.6-sol",
  },
  {
    description: "Fast",
    icon: Gemini.Color,
    label: "Gemini 2.5 Pro",
    value: "gemini-2.5-pro",
  },
]

const FONTS = ["Sans-serif", "Serif", "Monospace", "Cursive", "Fantasy", "System UI"]

interface Country {
  code: string
  continent: string
  label: string
  value: string
}

// Long list to exercise scrolling: the search must stay pinned to the top.
const COUNTRIES: Country[] = [
  { code: "af", continent: "Asia", label: "Afghanistan", value: "afghanistan" },
  { code: "al", continent: "Europe", label: "Albania", value: "albania" },
  { code: "dz", continent: "Africa", label: "Algeria", value: "algeria" },
  { code: "ad", continent: "Europe", label: "Andorra", value: "andorra" },
  { code: "ao", continent: "Africa", label: "Angola", value: "angola" },
  { code: "ar", continent: "South America", label: "Argentina", value: "argentina" },
  { code: "am", continent: "Asia", label: "Armenia", value: "armenia" },
  { code: "au", continent: "Oceania", label: "Australia", value: "australia" },
  { code: "at", continent: "Europe", label: "Austria", value: "austria" },
  { code: "az", continent: "Asia", label: "Azerbaijan", value: "azerbaijan" },
  { code: "bs", continent: "North America", label: "Bahamas", value: "bahamas" },
  { code: "bh", continent: "Asia", label: "Bahrain", value: "bahrain" },
  { code: "bd", continent: "Asia", label: "Bangladesh", value: "bangladesh" },
  { code: "bb", continent: "North America", label: "Barbados", value: "barbados" },
  { code: "by", continent: "Europe", label: "Belarus", value: "belarus" },
  { code: "be", continent: "Europe", label: "Belgium", value: "belgium" },
  { code: "bz", continent: "North America", label: "Belize", value: "belize" },
  { code: "bj", continent: "Africa", label: "Benin", value: "benin" },
  { code: "bt", continent: "Asia", label: "Bhutan", value: "bhutan" },
  { code: "bo", continent: "South America", label: "Bolivia", value: "bolivia" },
  {
    code: "ba",
    continent: "Europe",
    label: "Bosnia and Herzegovina",
    value: "bosnia-and-herzegovina",
  },
  { code: "bw", continent: "Africa", label: "Botswana", value: "botswana" },
  { code: "br", continent: "South America", label: "Brazil", value: "brazil" },
  { code: "bn", continent: "Asia", label: "Brunei", value: "brunei" },
  { code: "bg", continent: "Europe", label: "Bulgaria", value: "bulgaria" },
  { code: "bf", continent: "Africa", label: "Burkina Faso", value: "burkina-faso" },
  { code: "bi", continent: "Africa", label: "Burundi", value: "burundi" },
  { code: "kh", continent: "Asia", label: "Cambodia", value: "cambodia" },
  { code: "cm", continent: "Africa", label: "Cameroon", value: "cameroon" },
  { code: "ca", continent: "North America", label: "Canada", value: "canada" },
  { code: "cv", continent: "Africa", label: "Cape Verde", value: "cape-verde" },
  {
    code: "cf",
    continent: "Africa",
    label: "Central African Republic",
    value: "central-african-republic",
  },
  { code: "td", continent: "Africa", label: "Chad", value: "chad" },
  { code: "cl", continent: "South America", label: "Chile", value: "chile" },
  { code: "cn", continent: "Asia", label: "China", value: "china" },
  { code: "co", continent: "South America", label: "Colombia", value: "colombia" },
  { code: "km", continent: "Africa", label: "Comoros", value: "comoros" },
  { code: "cg", continent: "Africa", label: "Congo", value: "congo" },
  { code: "cr", continent: "North America", label: "Costa Rica", value: "costa-rica" },
  { code: "hr", continent: "Europe", label: "Croatia", value: "croatia" },
  { code: "cu", continent: "North America", label: "Cuba", value: "cuba" },
  { code: "cy", continent: "Asia", label: "Cyprus", value: "cyprus" },
  { code: "cz", continent: "Europe", label: "Czech Republic", value: "czech-republic" },
  { code: "dk", continent: "Europe", label: "Denmark", value: "denmark" },
  { code: "dj", continent: "Africa", label: "Djibouti", value: "djibouti" },
  { code: "dm", continent: "North America", label: "Dominica", value: "dominica" },
  {
    code: "do",
    continent: "North America",
    label: "Dominican Republic",
    value: "dominican-republic",
  },
  { code: "ec", continent: "South America", label: "Ecuador", value: "ecuador" },
  { code: "eg", continent: "Africa", label: "Egypt", value: "egypt" },
  { code: "sv", continent: "North America", label: "El Salvador", value: "el-salvador" },
  { code: "gq", continent: "Africa", label: "Equatorial Guinea", value: "equatorial-guinea" },
  { code: "er", continent: "Africa", label: "Eritrea", value: "eritrea" },
  { code: "ee", continent: "Europe", label: "Estonia", value: "estonia" },
  { code: "et", continent: "Africa", label: "Ethiopia", value: "ethiopia" },
  { code: "fj", continent: "Oceania", label: "Fiji", value: "fiji" },
  { code: "fi", continent: "Europe", label: "Finland", value: "finland" },
  { code: "fr", continent: "Europe", label: "France", value: "france" },
  { code: "ga", continent: "Africa", label: "Gabon", value: "gabon" },
  { code: "gm", continent: "Africa", label: "Gambia", value: "gambia" },
  { code: "ge", continent: "Asia", label: "Georgia", value: "georgia" },
  { code: "de", continent: "Europe", label: "Germany", value: "germany" },
  { code: "gh", continent: "Africa", label: "Ghana", value: "ghana" },
  { code: "gr", continent: "Europe", label: "Greece", value: "greece" },
  { code: "gd", continent: "North America", label: "Grenada", value: "grenada" },
  { code: "gt", continent: "North America", label: "Guatemala", value: "guatemala" },
  { code: "gn", continent: "Africa", label: "Guinea", value: "guinea" },
  { code: "gw", continent: "Africa", label: "Guinea-Bissau", value: "guinea-bissau" },
  { code: "gy", continent: "South America", label: "Guyana", value: "guyana" },
  { code: "ht", continent: "North America", label: "Haiti", value: "haiti" },
  { code: "hn", continent: "North America", label: "Honduras", value: "honduras" },
  { code: "hu", continent: "Europe", label: "Hungary", value: "hungary" },
  { code: "is", continent: "Europe", label: "Iceland", value: "iceland" },
  { code: "in", continent: "Asia", label: "India", value: "india" },
  { code: "id", continent: "Asia", label: "Indonesia", value: "indonesia" },
  { code: "ir", continent: "Asia", label: "Iran", value: "iran" },
  { code: "iq", continent: "Asia", label: "Iraq", value: "iraq" },
  { code: "ie", continent: "Europe", label: "Ireland", value: "ireland" },
  { code: "il", continent: "Asia", label: "Israel", value: "israel" },
  { code: "it", continent: "Europe", label: "Italy", value: "italy" },
  { code: "jm", continent: "North America", label: "Jamaica", value: "jamaica" },
  { code: "jp", continent: "Asia", label: "Japan", value: "japan" },
  { code: "jo", continent: "Asia", label: "Jordan", value: "jordan" },
  { code: "kz", continent: "Asia", label: "Kazakhstan", value: "kazakhstan" },
  { code: "ke", continent: "Africa", label: "Kenya", value: "kenya" },
  { code: "kw", continent: "Asia", label: "Kuwait", value: "kuwait" },
  { code: "kg", continent: "Asia", label: "Kyrgyzstan", value: "kyrgyzstan" },
  { code: "la", continent: "Asia", label: "Laos", value: "laos" },
  { code: "lv", continent: "Europe", label: "Latvia", value: "latvia" },
  { code: "lb", continent: "Asia", label: "Lebanon", value: "lebanon" },
  { code: "ls", continent: "Africa", label: "Lesotho", value: "lesotho" },
  { code: "lr", continent: "Africa", label: "Liberia", value: "liberia" },
  { code: "ly", continent: "Africa", label: "Libya", value: "libya" },
  { code: "li", continent: "Europe", label: "Liechtenstein", value: "liechtenstein" },
  { code: "lt", continent: "Europe", label: "Lithuania", value: "lithuania" },
  { code: "lu", continent: "Europe", label: "Luxembourg", value: "luxembourg" },
  { code: "mg", continent: "Africa", label: "Madagascar", value: "madagascar" },
  { code: "mw", continent: "Africa", label: "Malawi", value: "malawi" },
  { code: "my", continent: "Asia", label: "Malaysia", value: "malaysia" },
  { code: "mv", continent: "Asia", label: "Maldives", value: "maldives" },
  { code: "ml", continent: "Africa", label: "Mali", value: "mali" },
  { code: "mt", continent: "Europe", label: "Malta", value: "malta" },
  { code: "mh", continent: "Oceania", label: "Marshall Islands", value: "marshall-islands" },
  { code: "mr", continent: "Africa", label: "Mauritania", value: "mauritania" },
  { code: "mu", continent: "Africa", label: "Mauritius", value: "mauritius" },
  { code: "mx", continent: "North America", label: "Mexico", value: "mexico" },
  { code: "fm", continent: "Oceania", label: "Micronesia", value: "micronesia" },
  { code: "md", continent: "Europe", label: "Moldova", value: "moldova" },
  { code: "mc", continent: "Europe", label: "Monaco", value: "monaco" },
  { code: "mn", continent: "Asia", label: "Mongolia", value: "mongolia" },
  { code: "me", continent: "Europe", label: "Montenegro", value: "montenegro" },
  { code: "ma", continent: "Africa", label: "Morocco", value: "morocco" },
  { code: "mz", continent: "Africa", label: "Mozambique", value: "mozambique" },
  { code: "mm", continent: "Asia", label: "Myanmar", value: "myanmar" },
  { code: "na", continent: "Africa", label: "Namibia", value: "namibia" },
  { code: "nr", continent: "Oceania", label: "Nauru", value: "nauru" },
  { code: "np", continent: "Asia", label: "Nepal", value: "nepal" },
  { code: "nl", continent: "Europe", label: "Netherlands", value: "netherlands" },
  { code: "nz", continent: "Oceania", label: "New Zealand", value: "new-zealand" },
  { code: "ni", continent: "North America", label: "Nicaragua", value: "nicaragua" },
  { code: "ne", continent: "Africa", label: "Niger", value: "niger" },
  { code: "ng", continent: "Africa", label: "Nigeria", value: "nigeria" },
  { code: "kp", continent: "Asia", label: "North Korea", value: "north-korea" },
  { code: "mk", continent: "Europe", label: "North Macedonia", value: "north-macedonia" },
  { code: "no", continent: "Europe", label: "Norway", value: "norway" },
  { code: "om", continent: "Asia", label: "Oman", value: "oman" },
  { code: "pk", continent: "Asia", label: "Pakistan", value: "pakistan" },
  { code: "pw", continent: "Oceania", label: "Palau", value: "palau" },
  { code: "ps", continent: "Asia", label: "Palestine", value: "palestine" },
  { code: "pa", continent: "North America", label: "Panama", value: "panama" },
  { code: "pg", continent: "Oceania", label: "Papua New Guinea", value: "papua-new-guinea" },
  { code: "py", continent: "South America", label: "Paraguay", value: "paraguay" },
  { code: "pe", continent: "South America", label: "Peru", value: "peru" },
  { code: "ph", continent: "Asia", label: "Philippines", value: "philippines" },
  { code: "pl", continent: "Europe", label: "Poland", value: "poland" },
  { code: "pt", continent: "Europe", label: "Portugal", value: "portugal" },
  { code: "qa", continent: "Asia", label: "Qatar", value: "qatar" },
  { code: "ro", continent: "Europe", label: "Romania", value: "romania" },
  { code: "ru", continent: "Europe", label: "Russia", value: "russia" },
  { code: "rw", continent: "Africa", label: "Rwanda", value: "rwanda" },
  { code: "ws", continent: "Oceania", label: "Samoa", value: "samoa" },
  { code: "sm", continent: "Europe", label: "San Marino", value: "san-marino" },
  { code: "sa", continent: "Asia", label: "Saudi Arabia", value: "saudi-arabia" },
  { code: "sn", continent: "Africa", label: "Senegal", value: "senegal" },
  { code: "rs", continent: "Europe", label: "Serbia", value: "serbia" },
  { code: "sc", continent: "Africa", label: "Seychelles", value: "seychelles" },
  { code: "sl", continent: "Africa", label: "Sierra Leone", value: "sierra-leone" },
  { code: "sg", continent: "Asia", label: "Singapore", value: "singapore" },
  { code: "sk", continent: "Europe", label: "Slovakia", value: "slovakia" },
  { code: "si", continent: "Europe", label: "Slovenia", value: "slovenia" },
  { code: "sb", continent: "Oceania", label: "Solomon Islands", value: "solomon-islands" },
  { code: "so", continent: "Africa", label: "Somalia", value: "somalia" },
  { code: "za", continent: "Africa", label: "South Africa", value: "south-africa" },
  { code: "kr", continent: "Asia", label: "South Korea", value: "south-korea" },
  { code: "ss", continent: "Africa", label: "South Sudan", value: "south-sudan" },
  { code: "es", continent: "Europe", label: "Spain", value: "spain" },
  { code: "lk", continent: "Asia", label: "Sri Lanka", value: "sri-lanka" },
  { code: "sd", continent: "Africa", label: "Sudan", value: "sudan" },
  { code: "sr", continent: "South America", label: "Suriname", value: "suriname" },
  { code: "se", continent: "Europe", label: "Sweden", value: "sweden" },
  { code: "ch", continent: "Europe", label: "Switzerland", value: "switzerland" },
  { code: "sy", continent: "Asia", label: "Syria", value: "syria" },
  { code: "tw", continent: "Asia", label: "Taiwan", value: "taiwan" },
  { code: "tj", continent: "Asia", label: "Tajikistan", value: "tajikistan" },
  { code: "tz", continent: "Africa", label: "Tanzania", value: "tanzania" },
  { code: "th", continent: "Asia", label: "Thailand", value: "thailand" },
  { code: "tl", continent: "Asia", label: "Timor-Leste", value: "timor-leste" },
  { code: "tg", continent: "Africa", label: "Togo", value: "togo" },
  { code: "to", continent: "Oceania", label: "Tonga", value: "tonga" },
  {
    code: "tt",
    continent: "North America",
    label: "Trinidad and Tobago",
    value: "trinidad-and-tobago",
  },
  { code: "tn", continent: "Africa", label: "Tunisia", value: "tunisia" },
  { code: "tr", continent: "Asia", label: "Turkey", value: "turkey" },
  { code: "tm", continent: "Asia", label: "Turkmenistan", value: "turkmenistan" },
  { code: "tv", continent: "Oceania", label: "Tuvalu", value: "tuvalu" },
  { code: "ug", continent: "Africa", label: "Uganda", value: "uganda" },
  { code: "ua", continent: "Europe", label: "Ukraine", value: "ukraine" },
  {
    code: "ae",
    continent: "Asia",
    label: "United Arab Emirates",
    value: "united-arab-emirates",
  },
  { code: "gb", continent: "Europe", label: "United Kingdom", value: "united-kingdom" },
  { code: "us", continent: "North America", label: "United States", value: "united-states" },
  { code: "uy", continent: "South America", label: "Uruguay", value: "uruguay" },
  { code: "uz", continent: "Asia", label: "Uzbekistan", value: "uzbekistan" },
  { code: "vu", continent: "Oceania", label: "Vanuatu", value: "vanuatu" },
  { code: "va", continent: "Europe", label: "Vatican City", value: "vatican-city" },
  { code: "ve", continent: "South America", label: "Venezuela", value: "venezuela" },
  { code: "vn", continent: "Asia", label: "Vietnam", value: "vietnam" },
  { code: "ye", continent: "Asia", label: "Yemen", value: "yemen" },
  { code: "zm", continent: "Africa", label: "Zambia", value: "zambia" },
  { code: "zw", continent: "Africa", label: "Zimbabwe", value: "zimbabwe" },
]

export const Route = createFileRoute("/test")({
  component: function RouteComponent() {
    return (
      <Column>
        <Button2 label="Button 2" />
        <Spacer height={16} />

        <Label>Model</Label>
        <Spacer height={4} />

        <Select defaultValue={MODELS[0]} itemToStringValue={(item: Model) => item.value}>
          <SelectTrigger className="max-w-288">
            <SelectValue placeholder="Select a model">
              {(model: Model) => (
                <Row className="items-center">
                  {model.icon && <model.icon className="mr-8" size={ICON_SIZE} />}
                  <span className="truncate">{model.label}</span>
                  {model.description && (
                    <span className="ml-6 truncate text-13 font-400 text-gray-9">
                      {model.description}
                    </span>
                  )}
                </Row>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {MODELS.map((model) => (
              <SelectItem key={model.value} label={model.label} value={model}>
                <Row className="items-center">
                  {model.icon && <model.icon className="mr-8" size={ICON_SIZE} />}
                  <span className="truncate">{model.label}</span>
                  {model.description && (
                    <span className="ml-6 truncate text-13 font-400 text-gray-9">
                      {model.description}
                    </span>
                  )}
                </Row>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Spacer height={16} />

        <Select>
          <SelectTrigger className="max-w-288">
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectGroupLabel>Fonts</SelectGroupLabel>
              <SelectItem value="sans">Sans-serif</SelectItem>
              <SelectItem value="serif">Serif</SelectItem>
              <SelectItem disabled value="cursive">
                Cursive
              </SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectItem value="mono">Monospace</SelectItem>
            <SelectItem value="Monospace monospace monospace monospace monospace">
              Monospace monospace monospace monospace monospace
            </SelectItem>
          </SelectContent>
        </Select>
        <Spacer height={16} />

        <Select itemToStringValue={(item: Country) => item.value}>
          <SelectTrigger className="max-w-288">
            <SelectValue placeholder="Select a country (long list)" />
          </SelectTrigger>
          <SelectContent>
            {COUNTRIES.map((country) => (
              <SelectItem key={country.code} label={country.label} value={country}>
                {country.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Spacer height={16} />

        <Select defaultValue="sans" disabled>
          <SelectTrigger className="max-w-288">
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
        </Select>
        <Spacer height={32} />

        <Label>Combobox</Label>
        <Spacer height={4} />

        <Combobox defaultValue={MODELS[0]} items={MODELS}>
          <ComboboxTrigger className="max-w-288">
            <ComboboxValue placeholder="Select a model">
              {(model: Model) => (
                <Row className="items-center">
                  {model.icon && <model.icon className="mr-8" size={ICON_SIZE} />}
                  <span className="truncate">{model.label}</span>
                  {model.description && (
                    <span className="ml-6 truncate text-12 font-400 text-gray-9">
                      {model.description}
                    </span>
                  )}
                </Row>
              )}
            </ComboboxValue>
          </ComboboxTrigger>
          <ComboboxContent>
            <ComboboxSearch placeholder="Search models" />
            <ComboboxEmpty>No models found.</ComboboxEmpty>
            <ComboboxList>
              {(model: Model) => (
                <ComboboxItem key={model.value} value={model}>
                  <Row className="items-center">
                    {model.icon && <model.icon className="mr-8" size={ICON_SIZE} />}
                    <span className="truncate">{model.label}</span>
                    {model.description && (
                      <span className="ml-6 truncate text-12 font-400 text-gray-9">
                        {model.description}
                      </span>
                    )}
                  </Row>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <Spacer height={16} />

        <Combobox items={FONTS}>
          <ComboboxTrigger className="max-w-288">
            <ComboboxValue placeholder="Select a font" />
          </ComboboxTrigger>
          <ComboboxContent>
            <ComboboxSearch placeholder="Search fonts" />
            <ComboboxEmpty>No fonts found.</ComboboxEmpty>
            <ComboboxList>
              {(font: string) => (
                <ComboboxItem key={font} value={font}>
                  {font}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <Spacer height={16} />

        <Combobox items={COUNTRIES}>
          <ComboboxTrigger className="max-w-288">
            <ComboboxValue placeholder="Select a country" />
          </ComboboxTrigger>
          <ComboboxContent>
            <ComboboxSearch placeholder="e.g. United Kingdom" />
            <ComboboxEmpty>No countries found.</ComboboxEmpty>
            <ComboboxList>
              {(country: Country) => (
                <ComboboxItem key={country.code} value={country}>
                  {country.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <Spacer height={16} />

        <Combobox defaultValue="Sans-serif" disabled items={FONTS}>
          <ComboboxTrigger className="max-w-288">
            <ComboboxValue placeholder="Select a font" />
          </ComboboxTrigger>
        </Combobox>
        <Spacer height={32} />

        <Label>Menu</Label>
        <Spacer height={4} />

        <Row>
          <Menu>
            <MenuTrigger
              render={
                <Button
                  iconEnd={
                    <IconChevronDownOutline18
                      className="
                        text-text-secondary transition-transform duration-150
                        in-data-popup-open:rotate-180
                      "
                      size={14}
                    />
                  }
                  label="Song"
                  variant="secondary"
                />
              }
            />
            <MenuContent>
              <MenuItem>
                <IconMediaLibraryOutline18 />
                Add to Library
              </MenuItem>

              <MenuSubmenu>
                <MenuSubmenuTrigger>
                  <IconMusicPlaylistOutline18 />
                  Add to Playlist
                </MenuSubmenuTrigger>
                <MenuContent>
                  <MenuItem>Get Up!</MenuItem>
                  <MenuItem>Inside Out</MenuItem>
                  <MenuItem>Night Beats</MenuItem>
                  <MenuSeparator />
                  <MenuItem>
                    <IconPlusOutline18 />
                    New playlist
                  </MenuItem>
                </MenuContent>
              </MenuSubmenu>

              <MenuSeparator />
              <MenuItem>
                <IconMediaNextOutline18 />
                Play Next
              </MenuItem>
              <MenuItem disabled>
                <IconMediaSkipToEndOutline18 />
                Play Last
              </MenuItem>
              <MenuSeparator />
              <MenuLinkItem href="https://base-ui.com/react/components/menu" target="_blank">
                <IconArrowUpRightOutline18 />
                Menu docs
              </MenuLinkItem>
            </MenuContent>
          </Menu>
        </Row>
        <Spacer height={16} />

        <Row>
          <Menu>
            <MenuTrigger
              render={
                <Button
                  iconEnd={
                    <IconChevronDownOutline18
                      className="
                        text-text-secondary transition-transform duration-150
                        in-data-popup-open:rotate-180
                      "
                      size={14}
                    />
                  }
                  label="View"
                  variant="secondary"
                />
              }
            />
            <MenuContent>
              <MenuRadioGroup defaultValue="date">
                <MenuGroupLabel>Sort by</MenuGroupLabel>
                <MenuRadioItem value="date">Date</MenuRadioItem>
                <MenuRadioItem value="name">Name</MenuRadioItem>
                <MenuRadioItem value="type">Type</MenuRadioItem>
              </MenuRadioGroup>

              <MenuSeparator />

              <MenuGroup>
                <MenuGroupLabel>Workspace</MenuGroupLabel>
                <MenuCheckboxItem defaultChecked>Minimap</MenuCheckboxItem>
                <MenuCheckboxItem>Sidebar</MenuCheckboxItem>
              </MenuGroup>
            </MenuContent>
          </Menu>
        </Row>
        <Spacer height={64} />

        <Column className="gap-y-16">
          <DialogAppearance />

          <IconButton icon={<IconPlusOutline18 />} />

          <Button label="Click me" />

          <Button disabled label="Disabled" />
          <Button label="Loading" loading />

          <Button label="Size 32" rounded size={32} />
          <Button label="Size 36" rounded size={36} />
          <Button label="Size 40" rounded size={40} />
          <Button label="Size 44" rounded size={44} />
          <Button label="Size 48" rounded size={48} />

          <Button label="Size 32" size={32} />
          <Button label="Size 36" size={36} />
          <Button label="Size 40" size={40} />
          <Button label="Size 44" size={44} />
          <Button label="Size 48" size={48} />

          <Button fullWidth label="Full width" />

          <Button label="Ghost" variant="ghost" />
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />

          <Button iconStart={<IconPlusOutline18 />} label="Secondary" variant="secondary" />
        </Column>
      </Column>
    )
  },
})
