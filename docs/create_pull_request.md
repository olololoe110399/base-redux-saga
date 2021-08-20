# Nguyên tắc tạo Pull Request

---

### Gồm 3 phần phải làm

    - [Title](#Title)
    - [Description](#Descriptions)
    - [Label](#Label)

## Title

- Title pattern

  - **[Prefix]** **[ref ticket]** Mô tả thêm về Prefix

- Prefix

  - **Task** : thực hiện Task
  - **Bug** : thêm chức năng, tính năng mới
  - **Refactor** : sửa, nâng cấp tính năng ( không phải bugs )
  - **Improve** : sửa, nâng cấp tính năng ( không phải bugs )
  - **Revert** : chữa cháy

- Ví dụ pull request title

  - **[Add][#012345]** Add project readme

  - **[Modify][#012345]** Change library AB to version 1.2.0 in setting

## Label

- Sau khi tạo Pull Request thì add Label **Internal Review** để được review và merge.

## Descriptions

- Follow pull_request_template.md

### Ví dụ 1 PR Descriptions

```markdown
## Related Tickets

- [#123](https://linkticket.com)

## What's this PR do ?

- Implement splash screen

## Library

- react-native-splash-screen

## Impacted Areas in Application

- Splash screen

## Checklist

- [x] Unit test run successfully?
- [ ] Updated library at [here](https://???)
- [ ] Fill link PR into ticket and the opposite
- [ ] Note reason, scope of influence, solution into ticket
- [ ] Validate UI/Model/API
- [ ] Checked on iPhone 5, 7, X
- [ ] Followed latest specs at [#Link specs](https://???)

## Notes

- rerun npm install
```
