# How to contribute?

## We use Conventional Commits!

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

Conventional Commits is the specification we use to write semantically valuable commits.

### Syntax

```text
<type>(<scope>): <subject>
```

- `type`: The type of your commit.
- `scope`: The scope that is affected by your commit.
- `subject`: A brief description of the work done in your commit.

#### Supported types

- `feat`: A new feature.
- `style`: Changes related with some of the following (white-space, formatting, missing semi-colons, etc).
- `test`: Adding missing tests or correcting existing tests.
- `docs`: Changes made on documentation files.
- `chore`: Changes that don't modify src or test files. For housekeeping/cleanup.
- `ci`: Changes to our CI configuration files and scripts (examples: Travis, Circle, BrowserStack, SauceLabs)
- `build`: Changes to build system or external dependencies
- `perf` (AKA Performance): Code change that improves performance

#### Supported scopes

- `root`: Changes made to project's root level files.
- `mobile`: Changes made to the mobile environment (within the `/apps/mobile/` folder).
- `web`: Changes made to the web environment. (within the `/apps/web/` folder).
- `client`: Changes related with client tasks (examples: ). (within the `/packages/client/` folder).
- `server`: Changes made on server environment. (within the `/packages/server/` folder).
- `shared`: Changes made within the `/packages/shared/` folder.
- `types`: Changes made within the `/packages/types/` folder.

Samples:
```text
feat(server): add prisma client
```

```text
fear(shared): add log in component
```

```text
fix(web): fix typo on hero text
```

If you want to know more about Conventional Commits, you may want to check the [official specification](https://github.com/conventional-commits/conventionalcommits.org) or review a [practical guide written by @simonberner](https://simonberner.dev/posts/2021-02-03-conventional-commits-types)

## Our Gitflow Explained

Gitflow is a term used to describe the workflow and guidelines we follow in this project.

Just follow 4 steps!

1. Fork this repo (Or clone it, if you are an authorized contributor).
2. Create a new branch. Name it whathever name you want.
3. Make your changes.
4. Send your PR ****following conventional commits on its title****.

After following these steps, wait for one of our developers to accept your contribution, and you will have contributed to one of the many open source projects here on GitHub! 🎉

### Afraid of branches?

Hear what Git has to say about it:

> Understanding and mastering this feature [Git branching] gives you a powerful and unique tool and can entirely change the way that you develop.
> [Source](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell#:~:text=Understanding%20and%20mastering%20this%20feature%20gives%20you%20a%20powerful%20and%20unique%20tool%20and%20can%20entirely%20change%20the%20way%20that%20you%20develop)

Feel motivated by the fact that you will never have to worry about messing things up, and your productivity will multiply by a thousand.
