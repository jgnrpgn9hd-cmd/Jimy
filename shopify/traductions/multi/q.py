import json,sys
v=json.load(open(sys.argv[1])); n=len(v)//2
print("mutation(" + ", ".join(f"$r{i}: ID!, $t{i}: [TranslationInput!]!" for i in range(n)) + ") { " + " ".join(f"a{i}: translationsRegister(resourceId: $r{i}, translations: $t{i}) {{ userErrors {{ message }} }}" for i in range(n)) + " }")
print(json.dumps(v, ensure_ascii=False))
