---
title: Quantum states and Witnesses
category: research
date: 2026-10-21
status: exploring
---
# 量子态的资源性质、集合结构与 Witness 刻画

## 一、研究思路：如何刻画未知量子资源？

### 1.1 量子资源与研究对象

量子信息理论中的研究对象可以是量子态、测量、信道以及由多个量子系统构成的网络等。这些对象在不同物理限制和信息处理任务下，可能表现出不同的非经典性质与操作能力。

例如，一个量子态可能具有纠缠、magic、量子导引或 Bell 非局域性，也可能具有完成某种量子通信或计量任务的能力。

因此，对于一个给定的资源，一个自然的问题是：

**我们如何判断它是否具有某种指定的物理性质或操作能力？**

本文主要关注量子态，并研究如何通过有限的实验信息，对未知量子态的不同资源性质进行刻画与认证。

### 1.2 从物理性质到资源集合

考虑有限维 Hilbert 空间 $\mathcal H$，所有合法量子态构成集合

$$
\mathcal D(\mathcal H)
=
\{\rho:\rho\succeq0,\ \operatorname{Tr}\rho=1\}.
$$

我们可以根据关心的性质，对量子态施加不同的限制，从而定义相应的态集合

$$
\mathcal C\subseteq\mathcal D(\mathcal H).
$$

例如，可分态、非 magic 态、Bell 局域态等，分别由不同的物理条件定义。

于是，资源刻画的基本问题可以表示为

$$
\boxed{
\rho\in\mathcal C
\quad\text{还是}\quad
\rho\notin\mathcal C?
}
$$

这里，$\mathcal C$ 往往代表满足某种限制的资源集合。判断 $\rho\notin\mathcal C$，意味着可以排除相应的受限资源描述，从而认证某种非经典性质。

需要注意，资源性质有时依赖额外的物理假设。例如，一个态是否能够产生 Bell 非局域关联，与允许的局部测量类别有关。因此，定义资源集合时必须同时明确相关的操作和测量限制。

### 1.3 从实验数据认证未知量子态

如果已知完整的量子态 $\rho$，原则上可以直接分析其数学性质。但在实际实验中，通常需要通过测量获取关于量子态的信息。

量子态层析（Quantum State Tomography）试图使用信息完备的测量数据重建整个密度矩阵。

我们这里更关心另一种方法：

**不要求重建完整密度矩阵，而是直接使用有限的测量期望值或关联统计，对量子态的指定性质进行认证。**

假设实验测量了一组可观测量

$$
O_1,\ldots,O_m,
$$

得到期望值

$$
d_i=\langle O_i\rangle_\rho
=\operatorname{Tr}(\rho O_i).
$$

实验数据可以记为

$$
\mathbf d=(d_1,\ldots,d_m).
$$

我们希望利用这些数据判断未知态是否属于受限集合 $\mathcal C$。

一种方式是构造仅依赖观测数据的函数 $W(\mathbf d)$，使所有满足限制的态都满足

$$
W(\mathbf d)\leq\beta_{\mathcal C}.
$$

于是，一旦观测到

$$
\boxed{W(\mathbf d)>\beta_{\mathcal C},}
$$

就可以认证未知量子态不属于集合 $\mathcal C$。

这就是 Witness 或资源不等式的基本思想。

需要强调，Witness 认证通常是充分条件：不等式被违反可以排除目标集合，但不违反某一条不等式，并不意味着量子态一定属于该集合。

对于有限实验次数，还需要考虑统计误差，以确保观测违反具有可靠的置信水平。

### 1.4 整体研究思路

由此，我们希望采用以下基本框架：

**量子态 → 指定性质 → 受限资源集合 → 有限测量数据 → Witness / 不等式 → 资源认证**

在这个框架下，我们主要关心三个问题：

1. 如何根据物理性质定义资源集合？
2. 如何利用集合的数学结构构造 Witness？
3. 给定有限实验数据，Witness 究竟能够认证多少资源信息？

---

## 二、资源集合与 Witness 的基本理论

### 2.1 凸集与非凸集

资源集合的几何结构，会直接影响资源认证的方法。

集合 $\mathcal C$ 是凸的，是指对于任意 $\rho_1,\rho_2\in\mathcal C$ 和 $p\in[0,1]$，都有

$$
p\rho_1+(1-p)\rho_2\in\mathcal C.
$$

从物理上看，这意味着随机混合两个满足资源限制的态，得到的态仍然满足这一限制。

如果该条件不成立，则集合是非凸的。

量子态全集 $\mathcal D(\mathcal H)$ 本身是凸的，但不同物理限制定义的资源集合不一定具有相同的结构。

这里需要特别注意：**态集合、测量产生的关联集合，以及具有额外源独立性约束的网络关联集合，是不同的数学对象，其凸性需要分别讨论。**

### 2.2 线性 Witness 与超平面分离

对于有限维空间中的闭凸资源集合 $\mathcal C$，如果某个态 $\rho\notin\mathcal C$，根据凸集分离定理，可以找到 Hermitian 算符 $W$，使得

$$
\operatorname{Tr}(W\sigma)\geq0,
\qquad \forall\sigma\in\mathcal C,
$$

而

$$
\boxed{\operatorname{Tr}(W\rho)<0.}
$$

这个算符 $W$ 就构成了一个线性 Witness。

其几何意义是：通过一个超平面，将目标态与受限资源集合分离。

如果 Witness 能够展开为实验可测的可观测量

$$
W=\sum_i c_iO_i,
$$

那么

$$
\operatorname{Tr}(W\rho)
=\sum_i c_i\langle O_i\rangle_\rho.
$$

因此，我们只需要测量其中涉及的可观测量，就可以完成认证，而不必重建整个量子态。

对于有限维闭凸集合，完整的线性 Witness 族原则上能够刻画所有集合外的态；但实际使用时，我们通常只选择有限数量的 Witness，因此检测能力可能受到限制。

### 2.3 非线性 Witness 与非凸约束

线性 Witness 并非适用于所有资源刻画问题。

如果受限集合 $\mathcal C$ 是非凸的，那么对于任意线性函数 $L$，都有

$$
\sup_{\rho\in\mathcal C}L(\rho)
=
\sup_{\rho\in\operatorname{conv}(\mathcal C)}L(\rho).
$$

这意味着，**单纯依靠线性上界，无法区分非凸集合与其凸包内部的资源。**

因此，当我们希望利用某些特殊的非凸约束时，可能需要非线性 Witness、多项式不等式或其他优化方法。

例如，在 bilocal 网络中，两个经典源的统计独立性要求

$$
p(\lambda_1,\lambda_2)
=p(\lambda_1)p(\lambda_2).
$$

这一条件使经典 bilocal 关联集合通常是非凸的，因此可以通过非线性网络不等式揭示普通线性 Bell 不等式无法检测到的限制。

但要注意：非凸集合并不意味着所有有用 Witness 都必须是非线性的；只有当我们需要识别其凸包不能反映的结构时，非线性约束才具有不可替代的作用。

### 2.4 从有限数据到最优 Witness

假设实验只提供数据 $\mathbf d$。

一种系统的认证方式是先考虑与数据相容的受限资源：

$$
\mathcal C(\mathbf d)
=
\left\{
\sigma\in\mathcal C:
\operatorname{Tr}(\sigma O_i)=d_i
\right\}.
$$

如果

$$
\boxed{\mathcal C(\mathbf d)=\varnothing,}
$$

说明不存在任何属于目标集合的态能够解释观测数据，因此可以排除相应的资源限制。

对于线性 Witness，可以通过优化计算受限界

$$
\beta_{\mathcal C}
=
\max_{\sigma\in\mathcal C}
\operatorname{Tr}(W\sigma).
$$

这使 Witness 构造与优化理论联系起来。

在具体问题中，可以利用凸优化、半正定规划（SDP）、线性规划（LP）、多项式优化或其他方法求解相应的受限资源问题。

### 2.5 Witness 的刻画能力

构造一条 Witness 之后，我们还需要判断其实际作用。

**有效性（Validity）：** 所有满足资源限制的态是否都严格满足该不等式？

**紧性（Tightness）：** Witness 给出的界是否可以被某个合法资源达到？

**检测能力（Detection power）：** Witness 能够识别目标集合之外的哪些态？是否存在无法检测到的资源？

**完备性（Completeness）：** 一组 Witness 是否能够排除所有不属于目标集合的态？

**定量认证（Quantification）：** 观测数据能否进一步提供纠缠强度、magic 测度或其他资源测度的上下界？

这里尤其需要区分：**界是紧的，不等于 Witness 是完备的。** 一条不等式即使可以达到其理论边界，也不意味着它能够检测所有具有目标性质的量子态。

---

## 三、量子态的不同资源性质及其 Witness

本部分介绍五种具体的量子态性质。对每一种性质，重点说明其数学定义、相应资源集合，以及如何通过有限实验统计进行认证。

### 3.1 纠缠与可分性（Entanglement）

#### （1）数学定义

考虑双体量子态 $\rho_{AB}$。

如果存在概率分布 $p_\lambda$ 和局部量子态 $\rho_A^\lambda,\rho_B^\lambda$，使得

$$
\boxed{
\rho_{AB}
=
\sum_\lambda p_\lambda
\rho_A^\lambda\otimes\rho_B^\lambda,
}
$$

则称该态为可分态（Separable State）。

不能写成上述形式的双体态称为纠缠态（Entangled State）。

#### （2）资源集合

可分态集合为

$$
\mathcal S_{\mathrm{sep}}
=
\operatorname{conv}
\{\rho_A\otimes\rho_B\}.
$$

由于可分态的任意凸组合仍然可分，因此 $\mathcal S_{\mathrm{sep}}$ 是凸集。

在有限维系统中，它还是闭集，因此可以使用超平面分离理论构造纠缠 Witness。

#### （3）典型 Witness

Entanglement Witness 是一个 Hermitian 算符 $W$，满足

$$
\operatorname{Tr}(W\sigma)\geq0,
\qquad\forall\sigma\in\mathcal S_{\mathrm{sep}},
$$

但对于某些纠缠态 $\rho$，

$$
\operatorname{Tr}(W\rho)<0.
$$

例如，对于两个 qubit，可以构造

$$
W=\frac12 I_4-
|\Phi^+\rangle\langle\Phi^+|.
$$

因为任意可分态与 $\Phi^+$ 的重叠不超过 $1/2$，所以

$$
\operatorname{Tr}(W\rho)<0
$$

能够认证 $\rho$ 是纠缠态。

#### （4）其他判据

PPT 判据要求可分态在局部转置后仍然半正定：

$$
\rho_{AB}^{T_B}\succeq0.
$$

对于 $2\times2$ 和 $2\times3$ 系统，PPT 是可分性的充要条件；在更高维系统中，存在 PPT 纠缠态。

因此，PPT 判据与 Entanglement Witness 具有密切联系，但两者的适用方式和检测范围需要加以区分。

**本节重点：** 纠缠认证是凸资源集合刻画的典型例子。通过有限可观测量的期望值，可以在不进行完整态层析的情况下认证纠缠。

### 3.2 Magic 与 Non-magic

#### （1）数学定义

在多量子比特稳定子资源理论中，Clifford 操作与稳定子态构成一类经典可有效模拟的量子计算结构。

对于给定量子比特数，稳定子纯态的凸包定义了标准的自由态集合：

$$
\boxed{
\mathcal S_{\mathrm{stab}}
=
\operatorname{conv}
\{|s\rangle\langle s|:
|s\rangle\text{ 为稳定子纯态}\}.
}
$$

若

$$
\rho\notin\mathcal S_{\mathrm{stab}},
$$

则称该态具有 magic。

这里的定义对应特定的稳定子资源理论；对于其他物理系统或允许的自由操作，magic 的资源定义可能不同。

#### （2）资源集合及其几何结构

稳定子纯态集合是有限的，因此其凸包构成一个凸多面体，通常称为 Stabilizer Polytope。

以单量子比特为例，六个稳定子纯态分别是 Pauli $X,Y,Z$ 的正、负本征态。

把单量子比特写为

$$
\rho=\frac12(I+r_xX+r_yY+r_zZ),
$$

则非 magic 态满足

$$
\boxed{
|r_x|+|r_y|+|r_z|\leq1.
}
$$

这个集合在 Bloch 球内对应一个正八面体。

#### （3）Magic Witness

因为稳定子多面体是凸集，可以通过线性 Witness 判断未知态是否位于其中。

例如，所有单量子比特非 magic 态都满足

$$
r_x+r_y+r_z\leq1.
$$

因此，如果实验测得

$$
\boxed{
\langle X\rangle+
\langle Y\rangle+
\langle Z\rangle>1,
}
$$

就能够认证该量子态具有 magic。

例如，单量子比特 $T$ 态

$$
|T\rangle
=
\frac{|0\rangle+e^{i\pi/4}|1\rangle}{\sqrt2}
$$

满足

$$
\langle X\rangle
=\langle Y\rangle
=\frac1{\sqrt2},
\qquad
\langle Z\rangle=0.
$$

于是

$$
\langle X\rangle+\langle Y\rangle+\langle Z\rangle
=\sqrt2>1.
$$

因此，这个 Witness 可以认证该态具有 magic。

单量子比特 Stabilizer Polytope 的完整刻画，需要考虑不同符号组合对应的全部面约束。

#### （4）进一步刻画

除定性判断外，还可以研究 Robustness of Magic、Stabilizer Extent 等不同资源测度。

这些测度具有不同的定义和适用对象，因此需要分别考察其资源单调性与操作意义。

**本节重点：** Magic 为资源集合的多面体刻画提供了一个清晰例子。对于低维系统，可以利用有限数量的线性不等式直接刻画整个非 magic 态集合。

### 3.3 Bell 局域性与非局域性（Bell Nonlocality）

#### （1）数学定义

考虑双体 Bell 场景。Alice 的测量输入为 $x$、输出为 $a$，Bob 的测量输入为 $y$、输出为 $b$。

实验得到的关联为

$$
p(ab|xy).
$$

如果存在隐藏变量 $\lambda$，使得

$$
\boxed{
p(ab|xy)
=
\int d\lambda\,p(\lambda)
p(a|x,\lambda)p(b|y,\lambda),
}
$$

则称该关联具有局域隐变量模型（Local Hidden Variable Model, LHV），即 Bell 局域关联。

若不能用上述模型解释，则该关联具有 Bell 非局域性。

对于量子态 $\rho_{AB}$，局部测量产生的概率为

$$
p(ab|xy)
=
\operatorname{Tr}
[(M_{a|x}\otimes N_{b|y})\rho_{AB}].
$$

这里需要区分两个对象：

- **局域关联集合：** 在固定输入输出场景下，所有满足 LHV 模型的概率分布。
- **Bell 局域态集合：** 对指定允许的局部测量类别，所有产生的关联都具有 LHV 模型的量子态。

固定有限输入输出的局域关联集合是凸多面体。对于固定测量类别，Bell 局域态集合也是凸的，但它通常不具有同样简单的多面体结构。

#### （2）Bell 不等式

对于有限输入输出场景，局域关联集合可以由线性不等式刻画。

典型例子是 CHSH 不等式：

$$
\boxed{
\left|
\langle A_0B_0\rangle+
\langle A_0B_1\rangle+
\langle A_1B_0\rangle-
\langle A_1B_1\rangle
\right|
\leq2.
}
$$

所有局域关联都满足上述不等式。

量子理论允许达到 Tsirelson 界：

$$
S_{\mathrm{CHSH}}\leq2\sqrt2.
$$

因此，如果实验测得

$$
S_{\mathrm{CHSH}}>2,
$$

就可以认证观测关联不具有 LHV 模型。

#### （3）为什么 Bell 不等式能够认证量子态性质？

Bell 不等式直接作用于输入输出概率，而不是完整密度矩阵。

因此，我们可以通过实验关联排除局域模型，进而证明在给定测量场景下，未知量子态能够产生 Bell 非局域关联。

相较于通常需要可信测量算符的纠缠 Witness，Bell 不等式可以在满足 Bell 测试基本假设的情况下，以设备无关的方式认证非局域关联。

但不违反某一条 Bell 不等式，并不意味着量子态没有纠缠，也不意味着它对其他允许测量都具有局域模型。

**本节重点：** Bell 非局域性体现了从量子态的可观测关联出发，通过经典模型所满足的不等式进行资源认证的方法。

### 3.4 量子导引与不可导引性（Quantum Steering）

#### （1）物理场景与数学定义

考虑 Alice 和 Bob 共享未知双体量子态 $\rho_{AB}$。

Alice 进行输入为 $x$ 的测量，得到结果 $a$。Bob 的未归一化条件态为

$$
\boxed{
\sigma_{a|x}
=
\operatorname{Tr}_A
[(M_{a|x}\otimes I_B)\rho_{AB}].
}
$$

所有 $\sigma_{a|x}$ 构成 Assemblage。

它满足

$$
\sigma_{a|x}\succeq0,
\qquad
\sum_a\sigma_{a|x}=\rho_B.
$$

第二个关系意味着 Alice 的测量选择不能改变 Bob 的无条件态。

如果存在概率分布 $p(\lambda)$、局域响应函数 $p(a|x,\lambda)$ 和 Bob 的预先存在的局域量子态 $\rho_\lambda$，使得

$$
\boxed{
\sigma_{a|x}
=
\int d\lambda\,p(\lambda)
p(a|x,\lambda)\rho_\lambda,
}
$$

则称该 Assemblage 具有局域隐藏态模型（Local Hidden State Model, LHS）。

否则，该 Assemblage 可以展示 Alice 到 Bob 的量子导引。

#### （2）资源集合

对于固定的有限测量场景，所有满足 LHS 模型的 Assemblage 构成凸集。

如果讨论量子态是否不可导引，还需要明确导引方向以及允许 Alice 使用的测量类别。

因此，导引的资源刻画具有明显的场景依赖性。

#### （3）Steering Witness

对于一组 Hermitian 算符 $F_{a|x}$，可以构造线性函数

$$
S=
\sum_{a,x}
\operatorname{Tr}(F_{a|x}\sigma_{a|x}).
$$

若所有 LHS Assemblage 都满足

$$
\boxed{
S\leq\beta_{\mathrm{LHS}},
}
$$

则观测到

$$
S>\beta_{\mathrm{LHS}}
$$

就能够认证量子导引。

这类不等式称为 Steering Inequality。

#### （4）利用 SDP 判断导引

对于有限的 Alice 输入输出，可以将 LHS 模型改写为

$$
\sigma_{a|x}
=
\sum_\lambda D(a|x,\lambda)\tau_\lambda,
$$

其中 $D(a|x,\lambda)$ 是确定性响应函数，并要求

$$
\tau_\lambda\succeq0.
$$

于是，判断 Assemblage 是否存在 LHS 分解，可以转化为半正定规划可行性问题。

该问题的对偶形式还可以用于构造 Steering Witness。

**本节重点：** 量子导引在单边设备无关的信任结构下认证非经典关联。其典型方法是通过有限 Assemblage 数据与 LHS 模型的相容性来构造 Witness。

### 3.5 对量子隐形传态有用的态（Teleportation Usefulness）

#### （1）基本问题

除了纠缠、magic、非局域性和导引，我们还可以根据量子态完成某种信息处理任务的能力来定义资源性质。

量子隐形传态提供了一个例子。

假设 Alice 和 Bob 共享未知双体态 $\rho_{AB}$，并希望利用它传输未知量子态。

我们可以根据该资源所允许达到的平均传态保真度，判断它能否提供超过经典策略的性能。

#### （2）Fully Entangled Fraction

对于 $d\times d$ 系统，定义最大纠缠态

$$
|\Phi_d\rangle
=
\frac1{\sqrt d}\sum_{j=0}^{d-1}|jj\rangle.
$$

Fully Entangled Fraction 定义为

$$
\boxed{
f(\rho)
=
\max_U
\langle\Phi_d|
(I\otimes U)\rho(I\otimes U^\dagger)
|\Phi_d\rangle.
}
$$

它衡量量子态与最大纠缠态在局部酉优化后的最大重叠。

#### （3）传态性能与经典基准

对于以 Bell 测量和相应局部酉校正为基础的标准传态协议，相应优化平均保真度为

$$
F_{\mathrm{tel}}(\rho)
=
\frac{df(\rho)+1}{d+1}.
$$

对于均匀分布的未知纯态，不预先共享纠缠时的最优经典平均保真度为

$$
F_{\mathrm{cl}}
=
\frac2{d+1}.
$$

因此，在上述指定传态协议下，

$$
\boxed{
f(\rho)>\frac1d
}
$$

意味着传态保真度超过经典基准。

如果允许更一般的 LOCC 预处理或传态协议，则应重新定义对应的优化性能和资源集合。

#### （4）Teleportation Witness

可以将不具有指定传态优势的态定义为受限资源集合，然后寻找能够排除该集合的 Witness。

例如，对两个 qubit，

$$
W_{\mathrm{tel}}
=
\frac12I_4-
|\Phi^+\rangle\langle\Phi^+|
$$

满足：对于所有在标准协议下不具有传态优势的态，

$$
\operatorname{Tr}(W_{\mathrm{tel}}\rho)\geq0.
$$

因此，如果

$$
\operatorname{Tr}(W_{\mathrm{tel}}\rho)<0,
$$

就能够认证该态可用于实现超过经典基准的标准量子隐形传态。

值得注意的是，这个具体 Witness 同时也是纠缠 Witness。不过，并非所有纠缠态都必然能在未经额外处理的标准传态协议中超过经典基准。

**本节重点：** 传态有用性展示了如何根据具体信息处理任务的最优性能界，对未知量子态进行资源分类和 Witness 认证。

---

## 四、不同资源 Witness 的方法总结

通过上述五类量子态性质，可以总结出几种具有代表性的资源刻画方法。

### 4.1 不同性质对应什么资源限制？

| 性质 | 受限资源的定义 | 典型判据 |
|---|---|---|
| 纠缠 | 可分态分解 | Entanglement Witness |
| Magic | 稳定子纯态的凸组合 | Magic Witness |
| Bell 非局域性 | LHV 模型 | Bell Inequality |
| 量子导引 | LHS 模型 | Steering Witness |
| 传态有用性 | 指定传态协议的经典性能界 | Teleportation Witness |

这些方法具有相同的基本逻辑：先定义受限资源集合，再寻找所有受限资源必须满足的观测约束。

但不同性质的资源定义、观测对象和设备假设并不完全相同。

### 4.2 Witness 使用什么实验数据？

纠缠 Witness 和 Magic Witness 通常使用可信可观测量的期望值：

$$
\langle O_i\rangle_\rho.
$$

Bell 不等式使用实验输入输出概率：

$$
p(ab|xy).
$$

Steering Witness 使用 Bob 的条件态统计所确定的 Assemblage：

$$
\{\sigma_{a|x}\}_{a,x}.
$$

Teleportation Witness 则可以通过与传态能力相关的态重叠或其他可观测量，对任务性能提供保证。

因此，资源认证不仅取决于所构造的不等式，还取决于实验能够获得哪些信息，以及哪些装置需要被信任。

### 4.3 同一种性质可以有不同的 Witness

资源集合一般不会被单独一条 Witness 完整刻画。

例如，对于纠缠态，不同 Entanglement Witness 可以检测不同区域的纠缠态集合。

Bell 不等式也是如此。违反 CHSH 是认证 Bell 非局域性的充分条件，但不违反 CHSH 并不能排除其他 Bell 不等式的违反。

因此，研究 Witness 时，不应只关注它是否成立，还需要研究其检测能力，以及它与已有 Witness 的关系。

### 4.4 Witness 的紧性与定量能力

对于构造出的不等式，我们首先希望证明其受限资源界

$$
\beta_{\mathcal C}
=
\sup_{\rho\in\mathcal C}W(\rho)
$$

是严格的，并尽可能找到达到该界的资源。

在此基础上，还可以进一步考虑：给定一个观测违反值，我们至少能够保证资源具有多强的非经典性质？

如果用 $R(\rho)$ 表示某种资源测度，则可以研究

$$
\underline R(\mathbf d)
=
\inf_{\rho\text{ 与 }\mathbf d\text{ 相容}}R(\rho).
$$

这使 Witness 从简单的成员资格判断，推广到资源的定量认证。

### 4.5 当前的研究关注点

通过这些具体例子，可以看到量子资源刻画具有一个相对统一的研究结构。

首先明确资源性质所对应的数学限制，再分析资源集合的结构，最后从可获得的实验统计出发，寻找有效、紧且具有良好检测能力的 Witness。

因此，我希望在后续研究中重点关注：

**对于一个指定资源集合，能否利用其特殊的几何或代数结构，构造比已有方法更有效、适用范围更广或能够提供更强定量认证的 Witness？**

这也是理解不同资源判据及其研究价值的出发点。