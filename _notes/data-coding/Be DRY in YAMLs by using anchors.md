---
title: Be DRY in YAMLs by using anchors
title-cs: 
category: data-coding
tags: [idea, yaml]
season: spring
created: 11 Mar 2021
updated: 20 Aug 2022
sources: https://joshdevlin.com/blog/yaml-repeating-sections/
---

You define a block using an **anchor**, and then refer to it using an **alias**.

Anchors are denoted using a `&` character followed by the anchor name. Let’s look at a simple version of defining an anchor:

```yaml
dict_key_1: dict_value_1
key_with_anchor_value: &anchor_name hello
```

To use that anchor, we specify an alias using the `*` character followed by the anchor name:

```yaml
dict_key_1: dict_value_1
key_with_anchor_value: &anchor_name hello
key_with_alias_value: *anchor_name
```

The YAML above is the equivalent of this:

```yaml
dict_key_1: dict_value_1
key_with_anchor_value: hello
key_with_alias_value: hello
```

Let’s also see this in action by creating a list as our anchor block.

```yaml
dict_key_1: dict_value_1
key_with_anchor_value: &list_1
  - anchor_list_item_1
  - anchor_list_item_2
  - anchor_list_item_3
key_with_alias_value: *list_1
```

This above is the equivalent of this:

```yaml
dict_key_1: dict_value_1
key_with_anchor_value:
  - anchor_list_item_1
  - anchor_list_item_2
  - anchor_list_item_3
key_with_alias_value:
  - anchor_list_item_1
  - anchor_list_item_2
  - anchor_list_item_3
```