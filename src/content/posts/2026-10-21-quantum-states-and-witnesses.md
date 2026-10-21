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

# $$
\mathcal D(\mathcal H)

\rho:\rho\succeq0,\ \operatorname{Tr}\rho=1.
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

# $$
\sup_{\rho\in\mathcal C}L(\rho)

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

# $$
\mathcal C(\mathbf d)

\left
\sigma\in\mathcal C:
\operatorname{Tr}(\sigma O_i)=d_i
\right.
$$

如果

$$
\boxed{\mathcal C(\mathbf d)=\varnothing,}
$$

说明不存在任何属于目标集合的态能够解释观测数据，因此可以排除相应的资源限制。

对于线性 Witness，可以通过优化计算受限界

# $$
\beta_{\mathcal C}

\max_{\sigma\in\mathcal C}
\operatorname{Tr}(W\sigma).
$$

这使 Witness 构造与优化理论联系起来。

在具体问题中，可以利用凸优化、半正定规划（SDP）、线性规划（LP）、多项式优化或其他方法求解相应的受限资源问题。

### 2.5 Witness 的刻画能力

一条不等式不意味着它能够检测所有具有目标性质的量子态。有效和充要不是一回事。我们希望witness尽可能的靠近真正的集合边缘，这样就能检测出来更大范围。但这里的“optimal”往往有两种说法，一种是针对所有态的，一种是针对某一类态的。

---

## 三、量子态的不同资源性质及其 Witness

本部分介绍五种具体的量子态性质。对每一种性质，重点说明其数学定义、相应资源集合，以及如何通过有限实验统计进行认证。

### 3.1 纠缠与可分性（Entanglement）

#### （1）数学定义

考虑双体量子态 $\rho_{AB}$。

如果存在概率分布 $p_\lambda$ 和局部量子态 $\rho_A^\lambda,\rho_B^\lambda$，使得

# $$
\boxed{
\rho_{AB}

\sum_\lambda p_\lambda
\rho_A^\lambda\otimes\rho_B^\lambda,
}
$$

则称该态为可分态（Separable State）。

不能写成上述形式的双体态称为纠缠态（Entangled State）。

#### （2）资源集合

可分态集合为

# $$
\mathcal S_{\mathrm{sep}}

\operatorname{conv}
\rho_A\otimes\rho_B.
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

# $$
\boxed{
\mathcal S_{\mathrm{stab}}

\operatorname{conv}
|s\rangle\langle s|:
|s\rangle\text{ 为稳定子纯态}.
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

# $$
|T\rangle

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

**本节重点：** Magic 为资源集合的多面体刻画提供了一个清晰例子。对于低维系统，可以利用有限数量的线性不等式直接刻画整个非 magic 态集合。(这个性质其实我还不太熟悉。因为看过用CHSH不等式来间接检测一个态的magic，所以觉得其作用应该类似于纠缠。magic似乎在metrology或者资源理论里用的非常多，可能magic是某些非经典性的来源。)

### 3.3 Bell 局域性与非局域性（Bell Nonlocality）

#### （1）数学定义

考虑双体 Bell 场景。Alice 的测量输入为 $x$、输出为 $a$，Bob 的测量输入为 $y$、输出为 $b$。

实验得到的关联为

$$
p(ab|xy).
$$

如果存在隐藏变量 $\lambda$，使得

# $$
\boxed{
p(ab|xy)

\int d\lambdap(\lambda)
p(a|x,\lambda)p(b|y,\lambda),
}
$$

则称该关联具有局域隐变量模型（Local Hidden Variable Model, LHV），即 Bell 局域关联。

若不能用上述模型解释，则该关联具有 Bell 非局域性。

对于量子态 $\rho_{AB}$，局部测量产生的概率为

# $$
p(ab|xy)

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

# $$
\boxed{
\sigma_{a|x}

\operatorname{Tr}*A
[(M*{a|x}\otimes I_B)\rho_{AB}].
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

# $$
\boxed{
\sigma_{a|x}

\int d\lambdap(\lambda)
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

# $$
\sigma_{a|x}

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

# $$
|\Phi_d\rangle

\frac1{\sqrt d}\sum_{j=0}^{d-1}|jj\rangle.
$$

Fully Entangled Fraction 定义为

# $$
\boxed{
f(\rho)

\max_U
\langle\Phi_d|
(I\otimes U)\rho(I\otimes U^\dagger)
|\Phi_d\rangle.
}
$$

它衡量量子态与最大纠缠态在局部酉优化后的最大重叠。

#### （3）传态性能与经典基准

对于以 Bell 测量和相应局部酉校正为基础的标准传态协议，相应优化平均保真度为

# $$
F_{\mathrm{tel}}(\rho)

\frac{df(\rho)+1}{d+1}.
$$

对于均匀分布的未知纯态，不预先共享纠缠时的最优经典平均保真度为

# $$
F_{\mathrm{cl}}

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

# $$
W_{\mathrm{tel}}

\frac12I_4-
| \Phi^+\rangle\langle\Phi^+ |
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

**本节重点：** 传态有用性展示了如何根据具体信息处理任务的最优性能界，对未知量子态进行资源分类和 Witness 认证。（这里是因为我做了一个teleportation witness构造的工作，其实这算是第一次我自己认可我的研究内容。因为这个idea的产生很自然，做的也很顺。听了师妹汇报一篇用非局域性或者导引或者average correlations来刻画态隐形传态能力的论文，我当时产生了疑问，为什么不直接刻画态的性质，而是要间接来反应呢。后来发现在一定约束下teleportation- useless的态是一个凸集，这个性质就很好，但是问题出在需要遍历所有的酉矩阵，于是就想到了不停的迭代来构造割平面逐步逼近这个凸集，在一些case上数值优化的效果也还挺好。）

---

## 四、不同资源 Witness 的方法总结

通过上述五类量子态性质，可以总结出几种具有代表性的资源刻画方法。

### 4.1 不同性质对应什么资源限制？


| 性质 | 受限资源的定义 | 典型判据 |
| --------- | ------------ | --------------------- |
| 纠缠 | 可分态分解 | Entanglement Witness |
| Magic | 稳定子纯态的凸组合 | Magic Witness |
| Bell 非局域性 | LHV 模型 | Bell Inequality |
| 量子导引 | LHS 模型 | Steering Witness |
| 传态有用性 | 指定传态协议的经典性能界 | Teleportation Witness |


这些方法具有相同的基本逻辑：先定义受限资源集合，再寻找所有受限资源必须满足的观测约束。

但不同性质的资源定义、观测对象和设备假设并不完全相同。

### 4.2 当前的研究关注点与进一步思考

通过 Entanglement、Magic、Bell nonlocality、Steering 和 Teleportation usefulness 等例子，可以看到，量子资源的刻画具有相对统一的研究思路：首先明确希望认证的资源性质及其物理限制，由此定义相应的资源集合；然后分析集合的几何或代数结构，并利用可获得的实验统计，构造有效、紧且具有良好检测能力的 Witness。

在此基础上，我希望从以下两个方面进一步探索。

#### 一、资源的刻画与 Witness 构造

**1. 基于具体物理场景与资源集合结构构造 Witness**

对于一个指定的资源集合，我们首先需要明确其对应的物理场景、操作限制和实际意义，而不是仅从数学上人为定义一个集合。

在此基础上，希望研究：**能否利用资源集合特殊的几何或代数结构，构造比已有方法具有更强 detection power、更广适用范围，或能够提供更紧 quantitative certification bound 的 Witness？**

这里的重点是理解不同物理限制如何形成相应的集合结构，以及这些结构能否为新的 Witness 构造提供启发。

**2. 考虑其他资源限制下的认证能力**

一个资源能够展示的非经典性质，往往不仅取决于资源本身，还与其他参与资源及允许的操作有关。

例如，量子态能否展示 Bell nonlocality，不仅与态有关，也取决于所采用的 measurements。

因此，我们可以进一步考虑：**当另一类资源受到特定限制时，原有资源的非经典能力如何变化？能否利用这些限制构造新的 Witness，或获得更精确的资源刻画？**

一个值得关注的方向是限制允许使用的 measurement family，例如特定类型的 PVM、POVM，或实验中实际能够实现的测量。

相比完全优化所有可能的测量，这类研究可能更接近实际实验条件，也有助于理解资源性质与测量能力之间的联系。

**3. 利用 Information-processing Tasks 认证资源**

除了直接根据资源集合构造 Witness，还可以考虑通过具体信息处理任务的性能来认证资源。

例如，Random Access Code（RAC）、Nonlocal Game，以及 Quantum Metrology 中的不同估计任务，都可以在特定资源限制下定义相应的最优任务性能。

如果所有满足某种资源限制的策略都具有统一的性能上界，那么超过该界的实验结果就可以作为相应资源的 Witness。

因此，我希望进一步研究：**能否利用这些信息处理任务，认证未知 quantum states、measurements 或 channels 的非经典性质，甚至实现 self-testing？**

这里的重点不只是展示 quantum advantage，而是建立任务性能与底层资源性质之间的严格联系，从而将信息处理任务转化为具有明确操作意义的资源认证工具。

#### 二、不同资源层级之间的关系与转化

除了研究单个资源集合的刻画，我们也希望进一步理解不同资源性质或资源层级之间的关系。

**1. 不同资源层级之间的等价性与非等价性**

不同非经典性质通常对应不同的资源集合。我们可以研究这些集合之间是否存在包含关系，以及在附加物理限制后，某些原本不同的资源层级是否可能变得等价。

例如：

- 对于特定的 qubit states，Bell nonlocality 与 Steering 是否可能具有等价的认证条件？
- 对于给定维数或特定类型的量子态，PVM 和 POVM 所能展示的 Steering 能力是否等价？

这些问题的核心是：**在什么条件下，两种不同的资源性质或操作能力可以相互推出？如果不等价，能否明确刻画二者之间的差异？**

通过引入适当的维数、态结构或测量限制，可能获得比一般情形更精确的资源层级关系。

**2. 不同资源层级之间的转化及其成本**

除了判断资源层级之间是否等价，还可以研究在允许特定操作或引入辅助资源后，能否实现不同资源能力之间的转化。

例如，一个初始不具有 Steering 能力的量子态，在允许额外量子通信、辅助纠缠或其他非自由资源后，能否获得 Steering 能力？

如果这种转化是可能的，那么进一步的问题是：

**实现资源层级转化所需的最小额外资源成本是多少？**

这类成本可以根据具体任务用 quantum communication、classical communication、shared entanglement 或其他资源消耗来衡量，但需要明确允许的操作及资源转换的定义。例如，仅靠 LOCC 和 classical communication，不能将 separable state 转变为 entangled state，因此也无法产生真正的 Steering 资源。

这类问题将研究重点从静态的资源认证，进一步扩展到资源的操作能力、可转换性及其代价。

#### 三、整体研究思路

上述两个方向分别关注量子资源的不同方面：

**资源刻画：** 给定某种物理性质或操作限制，如何定义资源集合，并利用实验统计构造有效的 Witness？

**资源关系与转化：** 不同资源性质之间存在怎样的层级关系？在什么条件下能够等价、相互推出或实现转换？相应的资源成本是多少？

在后续研究中，我希望以具体资源及其物理场景为出发点，结合资源集合的数学结构、可实现的实验操作，以及信息处理任务的性能限制，寻找具有明确物理意义和非平凡理论结论的问题。

目前这些想法主要作为研究方向的整理，不预先限定必须使用某一种 Witness、优化方法或信息处理任务。